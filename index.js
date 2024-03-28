const element = document.getElementById("sent")
const message = document.getElementById("last_message")

function Submit() {
    element.style.display="block";
    setInterval(() => {
        element.style.display="none";
        message.style.display="block";
        setInterval(() => {
            message.style.display="none"
        }, 3000);
    }, 3000);
    
}