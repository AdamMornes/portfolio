import ButtonBackground from '../Common/Buttons/ButtonBackground';
import ButtonInfo from '../Common/Buttons/ButtonInfo';
import Divider from '../Common/Divider/Divider';

export default function Resume() {
  return (
    <div className="text-center">
      <Divider />

      <p className="font-raleway text-2xl mb-4">
        Need more details about my work history?
        <br />
        Check out my resume!
      </p>

      <div className="inline-flex flex-col gap-4">
        <ButtonBackground
          isAnchor
          href="/resume-adam-mornes.pdf"
          target="_blank"
        >
          Download Resume
        </ButtonBackground>

        <ButtonInfo>View Resume</ButtonInfo>
      </div>

      <Divider />
    </div>
  );
}
