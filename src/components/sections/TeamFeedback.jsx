import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  box-shadow: 0px 2px 10px rgba(235, 235, 235, 0.5);
`;

const Wrapper = styled.div`
  position: relative;
  padding: 1rem;

  &:not(:last-child) {
    border-bottom: 0.5px solid #dedede;
  }
`;

const ContentHeading = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  img {
    border-radius: 100px;
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
  }

  h3 {
    margin-top: 0.5rem;
    margin-bottom: 0.8rem;
  }
`;

const FeedBack = styled.p`
  margin-bottom: 2rem;
`;

const Rating = styled.span`
  padding: 0.3rem;
  background-color: rgba(96, 80, 220, 0.1);
  color: #6050dc;
  position: absolute;
  right: 1rem;
  top: 1rem;
  margin-right: 0.5rem;
`;

const TeamFeedback = ({ candidate }) => (
  <Container id="feedback">
    {candidate.feedback.map(feedback => (
      <Wrapper key={feedback.reviewer}>
        <ContentHeading>
          <div>
            <img src={feedback.image} alt="Owner of UR" />
          </div>
          <div>
            <h3>{feedback.reviewer}</h3>
            <span>{feedback.role}</span>
          </div>
          <Rating>
            {feedback.rating.verdict}{" "}
            <span role="img" aria-label="emoji">
              {feedback.rating.emoji}
            </span>
          </Rating>
        </ContentHeading>
        <FeedBack>{feedback.review}</FeedBack>
      </Wrapper>
    ))}
  </Container>
);

export default TeamFeedback;
