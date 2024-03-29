import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  width: 100%;
  box-shadow: 0px 2px 10px rgba(235, 235, 235, 0.5);
  margin-bottom: 4rem;
  margin-top: 2rem;
`;

const WorkInfo = styled.div`
  border-bottom: 1px solid #eee;
  padding: 2rem;

  &:last-child {
    border: none;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #6050dc;
  margin-bottom: 1rem;
`;

const Splitter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #999;
  font-size: 1.1rem;
`;

const WorkExperience = ({ candidate }) => {
  return (
    <Container>
      {candidate.workExperience.map(exp => (
        <WorkInfo key={exp.title}>
          <Title>{exp.title}</Title>
          <SubTitle>{exp.company}</SubTitle>
          <Splitter>
            <p>
              {exp.start} - {exp.end}
            </p>
            <p>
              <i className="fa fa-location-arrow"></i> {exp.location}
            </p>
          </Splitter>
          <Description>{exp.description}</Description>
        </WorkInfo>
      ))}
    </Container>
  );
};

export default WorkExperience;
