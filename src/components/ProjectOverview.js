import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

// Images for different pages of all projects
const tutorialSteps = {
  Furnitureland: [
    {
      label: "Landing Page",
      imgPath:
        "https://markportfoliobucket.s3-ap-southeast-2.amazonaws.com/furnitureland/LandingPage.png",
    },
    {
      label: "Listing Info Page",
      imgPath:
        "https://markportfoliobucket.s3-ap-southeast-2.amazonaws.com/furnitureland/ListingDetail.png",
    },
    {
      label: "New Listing Page",
      imgPath:
        "https://markportfoliobucket.s3-ap-southeast-2.amazonaws.com/furnitureland/NewListing.png",
    },
    {
      label: "All Listings Page",
      imgPath:
        "https://markportfoliobucket.s3-ap-southeast-2.amazonaws.com/furnitureland/ListingResult.png",
    },
  ],
  SUPI: [
    {
      label: "Landing Page",
      imgPath:
        "https://markportfoliobucket.s3-ap-southeast-2.amazonaws.com/SUPI/LandingPage_v2.png",
    },
    {
      label: "Dashboard Page",
      imgPath:
        "https://markportfoliobucket.s3-ap-southeast-2.amazonaws.com/SUPI/CompanyDashboard.png",
    },
    {
      label: "Supplier Overview",
      imgPath:
        "https://markportfoliobucket.s3-ap-southeast-2.amazonaws.com/SUPI/SupplierOverview.png",
    },
    {
      label: "Company Invoices",
      imgPath:
        "https://markportfoliobucket.s3-ap-southeast-2.amazonaws.com/SUPI/CompanyInvoices.png",
    },
    {
      label: "Supplier Purchase Orders",
      imgPath:
        "https://markportfoliobucket.s3-ap-southeast-2.amazonaws.com/SUPI/SupplierPO.png",
    },
  ],
  Whatcocktail: [
    {
      label: "Cocktail Information Card",
      imgPath:
        "https://markportfoliobucket.s3-ap-southeast-2.amazonaws.com/whatcocktail/CocktailInfo.png",
    },
    {
      label: "Search Bar",
      imgPath:
        "https://markportfoliobucket.s3-ap-southeast-2.amazonaws.com/whatcocktail/SearchBar.png",
    },
    {
      label: "Search Result",
      imgPath:
        "https://markportfoliobucket.s3-ap-southeast-2.amazonaws.com/whatcocktail/SearchResult.png",
    },
  ],
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: 600,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 20,
    paddingLeft: theme.spacing(4),
    marginBottom: "10px",
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 350,
    maxWidth: 600,
    overflow: "hidden",
    display: "block",
    width: "100%",
  },
}));

export default function ProjectOverview(project) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps[project.project].length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      {/* page brief */}
      <Paper square elevation={0} className={classes.header}>
        <Typography>
          {tutorialSteps[project.project][activeStep].label}
        </Typography>
      </Paper>
      {/* Carousel Section */}
      <img
        className={classes.img}
        src={tutorialSteps[project.project][activeStep].imgPath}
        alt={tutorialSteps[project.project][activeStep].label}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}
