let activity = 'Cycling';

localStorage.setItem('activity', activity);

let savedActivity =
localStorage.getItem('activity');

if (savedActivity) {
    console.log(savedActivity);
} else {
    console.log('geen activiteit gevonden');
}

let newActivity = 'Running';
localStorage.setItem('activity', newActivity);