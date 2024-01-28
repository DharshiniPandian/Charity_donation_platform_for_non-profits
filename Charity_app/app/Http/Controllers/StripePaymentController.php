<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;
use Stripe\Charge;
use Stripe\Exception\CardException;
use Stripe\Exception\RateLimitException;
use Stripe\Exception\InvalidRequestException;
use Stripe\Exception\AuthenticationException;
use Stripe\Exception\ApiConnectionException;
use Stripe\Exception\Base;
use Illuminate\Support\Facades\Redirect;

class StripePaymentController extends Controller
{
    public function stripe(): View
    {
        return Inertia::render('FundProviderPayment');
    }

    public function handlePayment(Request $request)
    {
        try {
            // Set your Stripe secret key
            \Stripe\Stripe::setApiKey(config('services.stripe.secret'));

            // Get the payment token submitted by the form
            $token = $request->input('stripeToken');

            // Create a charge: this will charge the user's card
            Charge::create([
                'amount' => 1000, // amount in cents
                'currency' => 'usd',
                'description' => 'Example Charge',
                'source' => $token,
            ]);

            // You may want to store the charge details in your database or perform other actions here

            return redirect()->route('payment.success')->with('success', 'Payment successful!');
        } catch (CardException $e) {
            // Since it's a decline, Stripe automatically throws a CardException
            // You can customize the error message based on the exception code
            return back()->withErrors($e->getMessage());
        } catch (RateLimitException | InvalidRequestException | AuthenticationException | ApiConnectionException | Base $e) {
            // Handle other Stripe exceptions
            return back()->withErrors('An error occurred while processing your payment.');
        }
    }
}
