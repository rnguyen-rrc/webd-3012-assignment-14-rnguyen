import styled from 'styled-components';
import HeroImage from '../components/HeroImage/HeroImage';
import { basicInfo } from '../data/portfolioData';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 20px;
  background: #f3f3f3;
`;

const Card = styled.div`
  width: 100%;
  max-width: 1200px;
  background: white;
  padding: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 80px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
`;

const Left = styled.div`
  flex: 1;
  padding-left: 50px;

  h1 {
    font-size: 48px;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 26px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 16px;
    line-height: 1.6;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 260px;
    border-radius: 16px;
  }
`;

const HeroSection = () => {
  return (
    <HeroImage imageUrl="" height="auto" backgroundColor="transparent">
      <Wrapper>
        <Card>
          <Left>
            <h1>{basicInfo.name}</h1>
            <h2>{basicInfo.title}</h2>
            <p>{basicInfo.summary}</p>
            <p>{basicInfo.email}</p>

            <div className="hero__buttons">
              <a href="#projects" className="btn primary">
                View Projects
              </a>
              <a href={`mailto:${basicInfo.email}`} className="btn secondary">
                Contact Me
              </a>
            </div>
          </Left>

          <Right>
            <img src="/images/roline-profile.jpg" alt="Profile" />
          </Right>
        </Card>
      </Wrapper>
    </HeroImage>
  );
};

export default HeroSection;
