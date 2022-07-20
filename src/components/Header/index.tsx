import { Button } from "@mui/material";

interface IHeader {
  setSelectedOption: (item: string) => void;
}

export default function Header({ setSelectedOption }: IHeader) {
  return (
    <header>
      <h1 className="logo">EasyChoice</h1>
      <Button variant="contained" onClick={() => setSelectedOption("choice")}>
        Make choice
      </Button>
      <Button variant="contained" onClick={() => setSelectedOption("compare")}>
        Compare choices
      </Button>
    </header>
  );
}
