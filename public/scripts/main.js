function inputValue() {
  console.log("get input");
  // var title = document.getElementById('title').value;
  // console.log(title);
}

function getUsername() {
  return "x"
}

function getInvites(invitees) {
  guestlist = {user: true,}
  for (const guest of invitees) {
    guestlist[guest] = false;
  }
}

function saveEvent() {
  console.log("save event function")
    return firebase.firestore().collection('events').add({
      user: getUsername(),
      title: title,
      description: description,
      date: date,
      location: location,
      dresscode: dresscode,
      invitess: getInvites();
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(function(error) {
      console.error('Error writing new message to database', error);
    });
}


function readEvents() {
  console.log("read event function")
  var query = firebase.firestore()
                      .collection('messages')
                      .orderBy('timestamp', 'desc')
                      .limit(12);
  
  query.onSnapshot(function(snapshot) {
    snapshot.docChanges().forEach(function(change) {
      if (change.type === 'removed') {
        deleteMessage(change.doc.id);
      } else {
        var event = change.doc.data();
        // displayEvent(change.doc.id, event.timestamp, event.name, event.text)
        console.log(change.doc.id)
        console.log(event.name)
      }
    })
  })
}



// var description = document.getElementById('description');
// var location = document.getElementById('location');
// var dress = document.getElementById('dress');

// var submitButtonElement = document.getElementById('submit');


// eventFormElement.addEventListener('submit', saveEvent);

