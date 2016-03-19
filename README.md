# SMS Style Message Bubbles
A little proof of concept for text message style CSS lists

![Screenshot](https://raw.githubusercontent.com/mwrouse/message-bubbles/master/images/screenshot.png)

## Usage
Using this css/js library is incredibly simple! 
Here is an example of a little chat:
```html
<ul class="rounded-messages messages-width-large">
  <li>Hey, how are you?</li>
  <li class="right-msg">Hey! Long time, I'm doing well. How about yourself?</li>
  <li class="time"><strong>Today</strong> 10:37am</li>
  <li>Yeah, it's been a long time, and I'm glad to hear you're doing well. Life's crazy, but in a good way, for me!</li>
</ul>
```
Which would look like this:

![Example Conversation](https://raw.githubusercontent.com/mwrouse/message-bubbles/master/images/example_conversation.png)

Notice, how only the messages on the right side need a specific class, this is important. 

If you want, you can give the left side a class:

```html
<li class="left-msg">This is a message on the left</li>
```

But, there is no need to do this.

### Message Sizes 
You can control the size of the message display by adding one of the follow classes to your ```<ul>``` element:

```
messages-width-small  
messages-width-medium
messages-width-large
messages-width-full   (full screen)
```

### Animations
If you want to add a load animation to your list, simply add the ```reveal-messages``` class to your ```<ul>``` element.

#### Animation Speed 
There are three classes for controlling your animation speed:

```
msg-animation-slow
msg-animation-fast (default)
msg-animation-superfast
```
Add one of these classes to your ```<ul>``` element to control the speed.


## Example 
[See an example on CodePen](http://codepen.io/mwrouse/full/GZrKYb/)

## License
Distributed under the [MIT License](https://raw.githubusercontent.com/mwrouse/message-bubbles/master/LICENSE).

