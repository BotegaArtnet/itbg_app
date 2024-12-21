import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Typography/Heading';

interface PostCardProps {
  title: string;
  author: string;
  date: string;
  content: string;
  image?: string;
  likes?: number;
  comments?: number;
  shares?: number;
}

const Card = styled.article`
  background: var(--color-background-paper);
  border-radius: 12px;
  padding: var(--spacing-4);
  margin-bottom: var(--spacing-4);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: var(--spacing-4);
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-3);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
`;

const Dot = styled.span`
  display: inline-block;
  width: 3px;
  height: 3px;
  background-color: var(--color-text-secondary);
  border-radius: 50%;
`;

const Content = styled.p`
  color: var(--color-text-primary);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-4);
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  padding-top: var(--spacing-3);
  border-top: 1px solid var(--color-background);
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
`;

export const PostCard: React.FC<PostCardProps> = ({
  title,
  author,
  date,
  content,
  image,
  likes = 0,
  comments = 0,
  shares = 0,
}) => {
  return (
    <Card>
      {image && (
        <ImageContainer>
          <Image src={image} alt={title} />
        </ImageContainer>
      )}
      <Heading level="h3" weight="semibold" noMargin>
        {title}
      </Heading>
      <Meta>
        <span>{author}</span>
        <Dot />
        <span>{date}</span>
      </Meta>
      <Content>{content}</Content>
      <Stats>
        <StatItem>
          <span>❤️</span>
          <span>{likes}</span>
        </StatItem>
        <StatItem>
          <span>💬</span>
          <span>{comments}</span>
        </StatItem>
        <StatItem>
          <span>🔄</span>
          <span>{shares}</span>
        </StatItem>
      </Stats>
    </Card>
  );
}; 