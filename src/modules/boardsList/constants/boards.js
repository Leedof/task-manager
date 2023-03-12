import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MedicalInformationOutlinedIcon from "@mui/icons-material/MedicalInformationOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

export const boards = [
  {
    title: "Home",
    icon: <HomeOutlinedIcon />,
    to: "/",
  },
  {
    title: "Health",
    icon: <MedicalInformationOutlinedIcon />,
    to: "/health",
  },
  {
    title: "Business",
    icon: <BusinessCenterOutlinedIcon />,
    to: "/business",
  },
  {
    title: "Education",
    icon: <SchoolOutlinedIcon />,
    to: "/education",
  },
];
