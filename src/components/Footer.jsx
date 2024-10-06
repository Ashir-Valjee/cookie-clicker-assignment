import githubLogo from "../../public/images/github-logo-black.png";

export default function Footer() {
  return (
    <>
      <footer>
        <p>&copy; Ashir Valjee 2024</p>
        <div>
          <a href="https://github.com/Ashir-Valjee" target="_blank">
            <img id="github-logo" src={githubLogo} />
          </a>
        </div>
      </footer>
    </>
  );
}
