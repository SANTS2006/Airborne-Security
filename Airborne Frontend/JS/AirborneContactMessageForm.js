const messageForm = document.getElementById('messageForm');

messageForm.addEventListener('submit', sendMessage);

async function sendMessage(e){
    e.preventDefault();  
    console.log('send message clicked')
    const data = {
        FirstName: document.getElementById('FirstName').value,
        LastName: document.getElementById('LastName').value,
        Email: document.getElementById('Email').value,
        Subject: document.getElementById('Subject').value,
        Message: document.getElementById('Message').value
    }

    const formdata = new FormData();
    formdata.append('FirstName', data.FirstName);
    formdata.append('LastName', data.LastName);
    formdata.append('Email', data.Email);
    formdata.append('Subject', data.Subject);
    formdata.append('Message', data.Message);
    
    try {
        const response = await fetch('http://localhost:3000/airborne/contactMessage', 
        {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        });
        data.FirstName ='';
        data.LastName ='';
        data.Email ='';
        data.Subject ='';
        data.Message='';
        const result = await response.json();
        window.alert(result.message);
        window.location.reload();
    } catch (error) {
        console.log(error);
    }

    
}