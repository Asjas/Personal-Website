import * as React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

function Footer(): React.ReactElement {
  return (
    <footer className="footer">
      <OutboundLink
        className="footer__link"
        href="https://twitter.com/_asjas"
        target="_blank"
        rel="noopener noreferrer"
        aria-labelledby="twitter-icon"
      >
        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.95 4.57a10 10 0 0 1-2.82.77 4.96 4.96 0 0 0 2.16-2.72c-.95.56-2 .96-3.12 1.19a4.92 4.92 0 0 0-8.38 4.48A13.93 13.93 0 0 1 1.63 3.16a4.92 4.92 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.61v.06c0 2.38 1.7 4.37 3.95 4.82a5 5 0 0 1-2.21.09 4.94 4.94 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 19.54a14 14 0 0 0 7.56 2.21c9.05 0 14-7.5 14-13.98 0-.21 0-.42-.02-.63A9.94 9.94 0 0 0 24 4.59l-.05-.02z" />
        </svg>
        <span id="twitter-icon" className="sr-only">
          Link to twitter profile
        </span>
      </OutboundLink>
      <OutboundLink
        className="footer__link"
        href="https://github.com/asjas"
        target="_blank"
        rel="noopener noreferrer"
        aria-labelledby="github-icon"
      >
        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3" />
        </svg>
        <span id="github-icon" className="sr-only">
          Link to github profile
        </span>
      </OutboundLink>
      <OutboundLink
        className="footer__link"
        href="https://www.freecodecamp.org/asjas"
        target="_blank"
        rel="noopener noreferrer"
        aria-labelledby="freecodecamp-icon"
      >
        <svg viewBox="0 0 480 370" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFFFFF">
            <path
              d="M0.734375,147.007553 C0.734375,99.9376795 17.4276781,57.8225293 51.0672131,20.4143665 C63.2077971,7.03661297 73.3249505,0.1 80.1540291,0.1 C82.4303886,0.1 84.7067481,0.843208532 86.9831076,2.3296256 C88.5006806,3.81604266 90.0182536,6.04566826 90.0182536,8.27529385 C90.0182536,11.9913365 85.4655346,17.1937962 77.1188831,25.6168263 C41.961775,58.5657378 24.2567566,98.9467348 24.2567566,147.750762 C24.2567566,201.757248 42.7205615,245.111079 78.6364561,278.803199 C86.2243211,285.492076 89.2594671,290.694536 89.2594671,295.153787 C89.2594671,297.383413 87.7418941,299.613038 86.2243211,301.842664 C84.7067481,303.329081 81.6716021,304.815498 79.3952426,304.815498 C71.048591,304.815498 59.4138646,295.153787 44.2381346,276.325838 C14.6454609,240.651828 0.734375,198.041206 0.734375,147.007553 L0.734375,147.007553 L0.734375,147.007553 Z"
              id="path29"
            />
            <path
              d="M464.1,158.89889 C464.1,205.968763 447.406697,248.083914 413.767162,285.492076 C401.626578,298.86983 391.509424,305.806443 384.680346,305.806443 C382.403986,305.806443 380.127627,305.063234 377.851267,303.576817 C376.333694,302.0904 374.816121,299.117566 374.816121,296.88794 C374.816121,293.171898 379.36884,287.969438 387.715492,280.537353 C422.8726,247.588441 440.577618,207.207444 440.577618,158.403417 C440.577618,104.396931 422.113813,61.0430996 386.197919,27.3509795 C378.610054,20.6621027 375.574908,15.459643 375.574908,11.0003918 C375.574908,8.77076621 377.092481,6.54114061 378.610054,4.31151501 C380.127627,2.82509795 383.162773,1.33868089 385.439132,1.33868089 C393.026997,1.33868089 405.42051,11.0003918 420.59624,29.8283413 C448.671341,65.5023508 464.1,108.112973 464.1,158.89889 L464.1,158.89889 L464.1,158.89889 Z"
              id="path31"
            />
            <g id="g33" transform="translate(107.580239, 265.729742)">
              <path
                d="M231.018149,29.7567544 L18.987793,29.7567544 C11.3926758,29.7567544 5.69633791,24.177363 5.69633791,16.7381744 C5.69633791,9.29898576 11.3926758,3.7195943 18.987793,3.7195943 L231.018149,3.7195943 C238.613266,3.7195943 244.309604,9.29898576 244.309604,16.7381744 C242.410824,24.177363 238.613266,29.7567544 231.018149,29.7567544 L231.018149,29.7567544 Z"
                id="path37"
              />
            </g>
            <path
              d="M187.395855,25.6168263 C187.395855,25.6168263 205.100873,37.5081628 205.100873,59.3089464 C205.100873,96.7171092 152.997533,137.841315 152.997533,176.735894 C152.997533,218.603308 185.878282,245.606552 217.241457,253.781846 C221.794176,254.525054 223.311749,250.065803 218.000244,248.579386 C205.100873,245.606552 191.189787,229.008228 191.189787,203.739138 C191.189787,179.708729 214.965098,170.790226 224.070536,159.642098 C233.934761,147.750762 231.658401,132.638855 225.588109,128.179604 C219.517817,123.720352 224.070536,117.774684 233.934761,125.20677 C243.798985,131.895646 252.398565,145.521136 249.110491,157.412473 C245.316558,173.019852 250.628064,182.18609 258.974715,183.672507 C267.321367,185.158924 276.679734,180.699673 275.668018,173.267588 C274.656303,165.835503 270.356513,157.660209 272.632872,157.660209 C278.703164,157.660209 291.096677,171.781171 291.096677,195.068372 C291.096677,218.355572 271.874086,233.962951 265.803794,239.90862 C262.009861,243.624662 266.56258,248.083914 271.874086,245.854288 C274.150445,245.111079 279.461951,242.138245 282.497097,239.90862 C297.672827,229.5037 321.448137,207.702917 321.448137,168.065128 C321.448137,126.197714 305.513621,107.369765 288.567389,91.7623856 C271.874086,76.1550064 267.827224,79.8710491 272.632872,88.046343 C286.291029,111.333544 277.944378,119.508837 268.080153,119.508837 C255.939569,119.508837 255.939569,93.2488027 250.375135,73.1821723 C240.51091,28.3419242 198.271795,20.6621027 190.68393,19.9188942 C185.119495,17.4415324 178.037488,21.9007836 187.395855,25.6168263 L187.395855,25.6168263 Z"
              id="Shape"
            />
          </g>
        </svg>
        <span id="freecodecamp-icon" className="sr-only">
          Link to freeCodeCamp profile
        </span>
      </OutboundLink>
      <OutboundLink
        className="footer__link"
        href="https://www.linkedin.com/in/asjasroos/"
        target="_blank"
        rel="noopener noreferrer"
        aria-labelledby="linkedin-icon"
      >
        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.32-.02-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.94v5.66H9.35V9h3.42v1.56h.04a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
        </svg>
        <span id="linkedin-icon" className="sr-only">
          Link to linkedin profile
        </span>
      </OutboundLink>
      <OutboundLink
        className="footer__link"
        href="https://drive.google.com/open?id=19cfXz9GIPEPstCI_W_OWAiv1SmAwGM9l"
        rel="noopener noreferrer"
        target="_blank"
        aria-labelledby="resume-icon"
      >
        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.76 24l.66-.14A45.25 45.25 0 0 1 5 23.55l.72-.13.05-.02.75-.12 1.21-.18V0H7.7a73.81 73.81 0 0 0-3.97.14l-.9.07h-.04v23.78l-.02.01zM8.9.02v22.94a62.41 62.41 0 0 1 12.33-.2V1.5A57.5 57.5 0 0 0 12.27.17 58.5 58.5 0 0 0 8.9.02zm10.76 14.8l-.04-.01-.56-.06a61.15 61.15 0 0 0-8.43-.28h-.05l-.13-.01a.6.6 0 0 1-.27-.15.58.58 0 0 1-.15-.5c0-.06.02-.1.05-.16l.1-.14a.56.56 0 0 1 .15-.1.89.89 0 0 1 .18-.06h.09l.57-.02a65.86 65.86 0 0 1 8.45.36l.15.02c.05.01.1.01.14.03.1.04.2.1.25.18.05.04.08.1.1.16.04.06.05.12.05.18a.56.56 0 0 1-.16.45c-.05.05-.1.08-.14.1-.04.04-.1.05-.16.07l-.1.01h-.04l-.05-.08zm.04-2.72h-.1l-.55-.08c-1.4-.17-2.8-.3-4.2-.35a56.3 56.3 0 0 0-4.2-.06l-.05-.02-.14-.03a.57.57 0 0 1-.25-.17l-.1-.14a.6.6 0 0 1 .02-.53l.1-.15a.28.28 0 0 1 .16-.1c.06-.03.12-.06.18-.06l.09-.02.58-.01a62.98 62.98 0 0 1 8.44.48l.15.01.1.02c.1.03.19.07.26.16.12.12.18.29.17.45a.3.3 0 0 1-.05.17l-.09.15-.13.12-.17.06-.09.01h-.04l-.1.1zm0-2.71h-.1l-.55-.09a61.26 61.26 0 0 0-8.4-.55h-.05l-.1-.02a.73.73 0 0 1-.16-.07.63.63 0 0 1-.28-.43l.01-.19a.61.61 0 0 1 .06-.16c.03-.06.08-.1.12-.15a.6.6 0 0 1 .42-.16h.57a62.19 62.19 0 0 1 8.46.63l.15.02c.04 0 .06 0 .09.02.06.02.12.04.16.08.06.03.1.07.14.12l.09.16a.59.59 0 0 1-.4.77l-.1.02h-.14zm0-2.71h-.1l-.55-.1a66.25 66.25 0 0 0-8.41-.7h-.04l-.1-.02a.63.63 0 0 1-.31-.2l-.1-.14a.62.62 0 0 1 .14-.67.59.59 0 0 1 .28-.16l.13-.01h.57a62.55 62.55 0 0 1 8.45.78l.14.01a.2.2 0 0 1 .09.02c.06.01.1.04.16.07.05.03.1.08.13.12.09.14.13.3.1.47a.74.74 0 0 1-.06.16.52.52 0 0 1-.12.14.6.6 0 0 1-.27.15h-.14v.08zM4.04 6.17a.64.64 0 0 1-.27-.06.6.6 0 0 1-.33-.5c0-.07.01-.12.03-.17a.66.66 0 0 1 .25-.35.73.73 0 0 1 .24-.1l.48-.04L6.4 4.8h.06c.1 0 .2.03.27.08.2.1.32.3.32.51 0 .06-.02.11-.03.17a.47.47 0 0 1-.1.18.55.55 0 0 1-.16.17.67.67 0 0 1-.24.09l-.31.03-.44.03-1.17.09-.28.03a.8.8 0 0 1-.2.01l-.07-.02zm15.65-2.2l-.09-.01-.55-.1a62.77 62.77 0 0 0-8.43-.84h-.04l-.1-.01a.64.64 0 0 1-.16-.08.74.74 0 0 1-.13-.12c-.12-.13-.17-.33-.12-.5.01-.06.04-.12.07-.18.03-.06.08-.1.12-.15a.63.63 0 0 1 .29-.15c.04-.02.09-.02.13-.02l.59.02a63.66 63.66 0 0 1 8.44.9l.15.01c.04 0 .06 0 .09.02.06.01.12.04.16.07.14.1.23.26.24.42.02.06 0 .12-.01.18 0 .06-.03.12-.06.17l-.1.13a.5.5 0 0 1-.3.14l-.08.01h-.05l-.06.09zM4.02 3.2a.59.59 0 0 1-.07-1.18L4.42 2l1.95-.1h.05c.1.02.18.03.26.07.18.11.3.32.3.53 0 .06-.02.12-.03.16a.86.86 0 0 1-.1.2.46.46 0 0 1-.19.15.5.5 0 0 1-.26.07c-.1.02-.2.02-.33.02l-.44.03-1.19.07-.3.02-.2.01.08-.02z" />
        </svg>
        <span id="resume-icon" className="sr-only">
          Link to resume
        </span>
      </OutboundLink>
    </footer>
  );
}

export default Footer;
