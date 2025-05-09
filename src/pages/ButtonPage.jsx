import { GoBell, GoDatabase, GoAlert, GoArchive, GoArrowBoth, GoBeaker } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <div>
          <Button>
            <GoBell />
            Plain
          </Button>
        </div>
        <div>
          <Button primary rounded className="underline underline-offset-8">
            Primary
          </Button>
        </div>
        <div>
          <Button secondary>
            <GoAlert />
            Secondary
          </Button>
        </div>
        <div>
          <Button success>
            <GoArchive />
            Success
          </Button>
        </div>
        <div>
          <Button warning>
            <GoArrowBoth />
            Warning
          </Button>
        </div>
        <div>
          <Button danger>
            <GoBeaker />
            Danger
          </Button>
        </div>
      </div>
      <div>
        <div>
          <Button rounded>Plain</Button>
        </div>
        <div>
          <Button primary rounded>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary rounded>
            Secondary
          </Button>
        </div>
        <div>
          <Button success rounded>
            Success
          </Button>
        </div>
        <div>
          <Button warning rounded>
            Warning
          </Button>
        </div>
        <div>
          <Button danger rounded>
            Danger
          </Button>
        </div>
      </div>
      <div>
        <div>
          <Button outline>Plain</Button>
        </div>
        <div>
          <Button primary outline>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary outline>
            Secondary
          </Button>
        </div>
        <div>
          <Button success outline>
            Success
          </Button>
        </div>
        <div>
          <Button warning outline>
            Warning
          </Button>
        </div>
        <div>
          <Button danger outline>
            Danger
          </Button>
        </div>
      </div>
      <div>
        <div>
          <Button outline rounded>
            Plain
          </Button>
        </div>
        <div>
          <Button primary outline rounded>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary outline rounded>
            Secondary
          </Button>
        </div>
        <div>
          <Button success outline rounded>
            Success
          </Button>
        </div>
        <div>
          <Button warning outline rounded>
            Warning
          </Button>
        </div>
        <div>
          <Button danger outline rounded>
            Danger
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ButtonPage;
