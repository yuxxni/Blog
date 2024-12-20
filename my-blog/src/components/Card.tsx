import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <CardContainer>
      <h2>{title}</h2>
      <p>{description}</p>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
  }
`;

export default Card;
