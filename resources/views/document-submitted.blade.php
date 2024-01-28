@component('mail::message')
    # Document Submitted Notification

    The organizers have submitted documents. Please review and take necessary actions.

    [View Details]({{ $url }})

    @component('mail::button', ['url' => $url])
        View Details
    @endcomponent

    Thanks,<br>
    {{ config('app.name') }}
@endcomponent
