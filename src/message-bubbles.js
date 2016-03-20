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
(function(){
  window.addEventListener('load', function(){
    // Get all messages 
    var messages = document.querySelectorAll('ul.rounded-messages.reveal-messages li');
    
    // Only try and show messages if some were found 
    if (messages.length > 0)
    {
      revealMessages(messages);
    }
  });
  
  
  /**
   * Function.....: Reveal Messages
   * Author.......: Michael Rouse
   * Parameters...: messages - the list of messages to display 
   * Description..: Displays messages one at a time 
   */
  function revealMessages(messages)
  {
    // Set static variable to remember what message number was last displayed 
    revealMessages.msg = (revealMessages.msg === undefined) ? 0 : revealMessages.msg;
    
    if (revealMessages.msg < messages.length)
    {
      // Set AnimationEnd Event Listener, to load the next message when this one finishes 
      (messages[revealMessages.msg]).addEventListener('animationend', function(){
        revealMessages(messages); // Reveal the next message
      });
      

      // Reveal the message if it is not already visible 
      if (!(messages[revealMessages.msg]).classList.contains('msg-visible'))
      {
        // Make sure there is a next message to reference 
        if (revealMessages.msg < (messages.length - 1))
        {
          // Remove the tail if this message is on the right, and the next message is on the right, OR if it a left message, and the next message is a left message
          if ( ((messages[revealMessages.msg]).classList.contains('right-msg') && (messages[revealMessages.msg+1]).classList.contains('right-msg')) || 
               (!(messages[revealMessages.msg]).classList.contains('right-msg') && !((messages[revealMessages.msg+1]).classList.contains('right-msg') || (messages[revealMessages.msg+1]).classList.contains('time'))) 
              )
          {
            (messages[revealMessages.msg]).classList.add('no-tail'); // No tail on this message
          }
        }
         
        // Show the message 
        (messages[revealMessages.msg]).classList.add('msg-visible');  
      } // End if 
      
      // Advance the message counter
      revealMessages.msg++;
    }
    
  } // End revealMessages()
}());

