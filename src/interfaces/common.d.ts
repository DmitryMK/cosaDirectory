// Declaring module for markdown files
declare module '*.md' {
  const value: string;
  export default value;
}

export interface IProject {
  projectInfo: {
    projectName: string;
    projectOwner: string;
    projectContact: string;
    projectLandingPage: string;
    projectRepository: string;
    programmingLanguage: Array<string>;
    openSourceLicense: Array<string>;
    cdiscStandards: Array<string>;
    agreeWithCdiscCodeOfEthics: boolean;
    projectMaturity: string;
    user: Array<string>;
    logoUrl: string;
  };
  detailedDescription: {
    problem: string;
    solution: string;
    openSourceConsiderations: string;
    maintenanceModel: string;
    projectSize: string;
    contributors: string;
    users: string;
    preRequisites: string;
    projectServiceOptions: string;
    sponsors: string;
    goalsObjectives: string;
    communications: string;
    additonalInformation: string;
  };
}
