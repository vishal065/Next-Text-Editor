vid link https://www.youtube.com/watch?v=MQ5T5s9tV7U
At 1:40:00
`onclick` will not work on LinkForm ok Button because input already have `onBlur` 
and the `onBlur` will be fired/hit before the `onclick` on button, to fix we can use `onMouseDown`