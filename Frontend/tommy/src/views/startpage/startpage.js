import React from 'react';
import { Button } from '../../components/button';
import { StartContainer, NavBar } from './styledStartpage';

const Start = () => {
  return (
    <StartContainer>
      <NavBar>
        <div>
          <h1>Hej jag heter Tony och är 16 år gammal!</h1>
        </div>
        <div>
          <img src="https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/s150x150/93361770_2870000449752323_4699634793892020224_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_ohc=aqpIo-6056sAX8hE-C3&oh=a3e1bff63ac4e50183c765e84501cc32&oe=5F61D49A" />
        </div>
        <Button onClick={test}>CLICK HERE</Button>
      </NavBar>
    </StartContainer>
  );
};

export default Start;
