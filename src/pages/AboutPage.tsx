import Button from '../components/Button/Button';

const AboutPage = () => {
  const handleContact = () => {
    window.location.href = 'mailto:roline.rrc@gmail.com';
  };

  return (
    <section className="section">
      <div className="container">
        <div className="about__card">
          <h2>About Me</h2>

          <p>
            I believe software delivers real value when it’s built around the
            people who use it. When teams truly understand client challenges,
            the result isn’t just software that works — it’s software that
            matters.
          </p>

          <p>
            My background across IT and Finance in both private and government
            sectors has taught me how to bridge business needs and technical
            realities. I focus on building practical, reliable solutions that
            solve real problems.
          </p>

          <p>
            I have over five years of experience in web development using PHP,
            jQuery, HTML, and MySQL, with a strong focus on building and
            maintaining CRM systems in clinical settings. My work goes beyond
            managing data — it’s about keeping workflows efficient, accurate,
            and dependable.
          </p>

          <p>
            One of my most meaningful projects was building{' '}
            <strong>“Idea Hub”</strong>, a centralized platform for client
            feedback and feature ideas. It was voted the top project in a
            company hackathon and reflects how I approach development: listening
            closely and building solutions that people actually use.
          </p>

          <div className="about__cta">
            <p>
              I’m always open to opportunities and collaborations. Let’s
              connect!
            </p>

            <Button
              label="Contact Me"
              backgroundColor="#000"
              color="#fff"
              onClick={handleContact}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
