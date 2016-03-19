/**
 * ====================================
 *          Message Bubbles
 * ===================================
 *
 * Author.......: Michael Rouse
 * Language.....: JavaScript
 * Date.........: March 2016
 *
 * Description..: Javascript for SMS Style Message Bubbles
 */
// Load Event Listener, to load all the items in the chat one-by-one
window.addEventListener('load', function(){
  var messages = document.querySelectorAll('ul.rounded-messages.reveal-messages li'); // Get all messages
  
  // Loop through all messages
  for (var i = 0; i < messages.length; i++)
  {
    // AnimationEnd Event Listner, loads next element after one loads 
    (messages[i]).addEventListener('animationend', function(){
      revealMessage(messages); // Reveal the next message
    });
  }
  
  // Reveal the first message to start chain reaction (thanks to the AnimationEnd event listener)
  revealMessage(messages);
  
}); // End Load Event Listener


// Reveals one message at a time from a list of messages 
function revealMessage(messages)
{
  // Loop through all messages 
  for (var i = 0; i < messages.length; i++)
  {
    // If the message is not visible, reveal it
    if (!(messages[i]).classList.contains('msg-visible'))
    {
      // Make sure there is a next message to reference
      if (i < (messages.length - 1))
      {
        // Check for two right messages in a row
        if ((messages[i]).classList.contains('right-msg') && (messages[i+1]).classList.contains('right-msg'))
        {
          // Next message is still a right message, remove the tail on the current message 
          (messages[i]).classList.add('no-tail');
        }
        
        
        // Check for two left messages in a row
        if (!((messages[i]).classList.contains('right-msg')) && !((messages[i+1]).classList.contains('right-msg') || (messages[i+1]).classList.contains('time')))
        {
          // Next message is still a left message, remove the tail on the current message
          (messages[i]).classList.add('no-tail');
        }
      }
      
      // Show the message, then exit the loop 
      (messages[i]).classList.add('msg-visible');
      i = messages.length;
    } 
  } // End For 
} // End revealMessage()

