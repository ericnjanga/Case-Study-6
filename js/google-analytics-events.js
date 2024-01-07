/**
 * Google Analytics Events
 * ------------------------
 */



function trackButtonClick() {
    gtag('event', 'click', {
      'event_category': 'Button Click',
      'event_label': 'Clicked',
      'value': 1
    });
  }
  