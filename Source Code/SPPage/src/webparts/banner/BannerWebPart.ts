import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'BannerWebPartStrings';
import Banner from './components/Banner';
import { IBannerProps } from './components/IBannerProps';
import { sp } from "@pnp/sp/presets/all";
import {
  PropertyFieldFilePicker,
  IPropertyFieldFilePickerProps,
  IFilePickerResult,
} from "@pnp/spfx-property-controls/lib/PropertyFieldFilePicker";

export interface IBannerWebPartProps {
  description: string;
  welcomebannerTitle: string;
  welcomebannerDescription1: string;
  welcomebannerDescription2: string;
  ourmissiontitle:string;
  ourmissiondescription:string;
  missionlabel1:string;
  missiondescription1:string;
  missionlabel2:string;
  missiondescription2:string;
  missionlabel3:string;
  missiondescription3:string;
  aiproducttitle:string;
  aiproductdescription:string;
  aiinsighttitle:string;
  aiinsightdescription:string;
  ourteamtitle:string;
  ourteamdesription:string;
  aistacktitle:string;
  aistackdesription:string;
  portfolioImage:IFilePickerResult;
  QuickAccessDescription:string;
  ourportfoliotitle:string;
}

export default class BannerWebPart extends BaseClientSideWebPart<IBannerWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  protected onInit(): Promise<void> {
    this._environmentMessage = this._getEnvironmentMessage();
    // @pnp/sp inital setup
    sp.setup({ spfxContext: this.context });

    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<IBannerProps> = React.createElement(
      Banner,
      {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName,
        welcomebannerTitle: this.properties.welcomebannerTitle ? this.properties.welcomebannerTitle :"PAL - Procurement AI Lab",
        welcomebannerDescription1: this.properties.welcomebannerDescription1 ? this.properties.welcomebannerDescription1 : "Procurement Digital Process & Solutions (DPS) - Global Services Procurement",
        welcomebannerDescription2: this.properties.welcomebannerDescription2 ? this.properties.welcomebannerDescription2 : "Say Hello to PAL - Your AI Partner for Procurement Excellence",
        ourmissiontitle: this.properties.ourmissiontitle ? this.properties.ourmissiontitle: "Our Mission",
        ourmissiondescription:this.properties.ourmissiondescription ? this.properties.ourmissiondescription :"To accelerate value creation for Procurement by pioneering data-driven innovation, simplifying processes, and empowering partners through actionable insights from Data Science, Advanced Analytics, and Generative AI.",
        missionlabel1:this.properties.missionlabel1 ? this.properties.missionlabel1:"C: COMPETE",
        missiondescription1:this.properties.missiondescription1 ? this.properties.missiondescription1:"We empower Procurement professionals and business partners to perform at their best—through world-class AI(Artificial Intelligence) solutions and actionable insights that enable faster, smarter decision-making",
        missionlabel2:this.properties.missionlabel2 ? this.properties.missionlabel2:"E: EXECUTE",
        missiondescription2:this.properties.missiondescription2 ? this.properties.missiondescription2:"We prioritize what matters - accelerating delivery on initiatives such as Project Preferred for MedTech and R&D Procurement projects in Innovative Medicine, ensuring speed and value.",
        missionlabel3:this.properties.missionlabel3 ? this.properties.missionlabel3:"O: OPTIMIZE",
        missiondescription3:this.properties.missiondescription3 ? this.properties.missiondescription3:"Every Challenge is an opportunity. We’re continuously learning from the challenges, and we’re building scalable solutions like Smart Source AI, designed to grow smarter with time and continuously deliver value.",
        aiproducttitle:this.properties.aiproducttitle ? this.properties.aiproducttitle : "AI Products - By PAL",
        aiproductdescription:this.properties.aiproductdescription ? this.properties.aiproductdescription : "Innovative software solutions designed to solve complex business challenges and accelerate digital transformation for companies worldwide.",
        aiinsighttitle:this.properties.aiinsighttitle ? this.properties.aiinsighttitle : "Insights from AI - Use cases",
        aiinsightdescription:this.properties.aiinsightdescription ? this.properties.aiinsightdescription : "Real-world use cases showcasing how our solutions drive measurable business impact across diverse industries and transform organizations worldwide.",
        ourteamtitle:this.properties.ourteamtitle ? this.properties.ourteamtitle : "About Our Team",
        ourteamdesription:this.properties.ourteamdesription ? this.properties.ourteamdesription : "We are a passionate team of innovators, designers, and engineers committed to pushing the boundaries of what's possible in technology and design.",
        aistacktitle: this.properties.aistacktitle ?  this.properties.aistacktitle : "AI Tech Stack",
        aistackdesription: this.properties.aistackdesription ? this.properties.aistackdesription : "Our technology stack and tools that power innovation and drive exceptional results across every project we deliver.",
        portfolioImage: this.properties.portfolioImage,
        QuickAccessDescription:this.properties.QuickAccessDescription,
        ourportfoliotitle: this.properties.ourportfoliotitle ?  this.properties.ourportfoliotitle : "Our Portfolio"
      }
    );

    ReactDom.render(element, this.domElement);
  }

  private _getEnvironmentMessage(): string {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams
      return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
    }

    return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment;
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;
    this.domElement.style.setProperty('--bodyText', semanticColors.bodyText);
    this.domElement.style.setProperty('--link', semanticColors.link);
    this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered);

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          displayGroupsAsAccordion: true,
          groups: [
            {
              groupName: "Welcome Banner",
                isCollapsed: false,
                groupFields: [
                  PropertyPaneTextField("welcomebannerTitle", {
                    label: "Welcome Title",
                  }),
                  PropertyPaneTextField("welcomebannerDescription1", {
                    label: "Welcome Description 1",
                    multiline: true,
                    rows: 3 // Number of visible rows
                  }),
                  PropertyPaneTextField("welcomebannerDescription2", {
                    label: "Welcome Description 2",
                    multiline: true,
                    rows: 3 // Number of visible rows
                  }),
                ]
            },
            {
              groupName: "Our Mission",
                isCollapsed: true,
                groupFields: [
                  PropertyPaneTextField("ourmissiontitle", {
                    label: "Our Mission Title",
                  }),
                  PropertyPaneTextField("ourmissiondescription", {
                    label: "Our Mission Description",
                    multiline: true,
                    rows: 3 // Number of visible rows
                  }),
                  PropertyPaneTextField("missionlabel1", {
                    label: "Mission Label 1",
                  }),
                  PropertyPaneTextField("missiondescription1", {
                    label: "Mission Description 1",
                    multiline: true,
                    rows: 3 // Number of visible rows
                  }),
                  PropertyPaneTextField("missionlabel2", {
                    label: "Mission Label 2",
                  }),
                  PropertyPaneTextField("missiondescription2", {
                    label: "Mission Description 2",
                    multiline: true,
                    rows: 3 // Number of visible rows
                  }),
                  PropertyPaneTextField("missionlabel3", {
                    label: "Mission Label 3",
                  }),
                  PropertyPaneTextField("missiondescription3", {
                    label: "Mission Description 3",
                    multiline: true,
                    rows: 3 // Number of visible rows
                  }),
                ]
            },
            {
              groupName: "Quick Access",
                isCollapsed: true,
                groupFields: [
                  PropertyPaneTextField("QuickAccessDescription", {
                    label: "Quick Access Description",
                  }),
                ]
              },
            {
              groupName: "Our Portfolio",
                isCollapsed: true,
                groupFields: [
                  PropertyPaneTextField("ourportfoliotitle", {
                    label: "Our Portfolio Title",
                  }),
                  PropertyFieldFilePicker("portfolioImage", {
                    context: this.context,
                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                    properties: this.properties,
                    onSave: (e: IFilePickerResult) => {
                      console.log(e);
                      this.properties.portfolioImage = e;
                    },
                    onChanged: (e: IFilePickerResult) => {
                      console.log(e);
                      this.properties.portfolioImage = e;
                    },
                    buttonLabel: "Upload Image",
                    label: "Our Portfolio Image",
                    key: "FilePickerID",
                    filePickerResult: this.properties.portfolioImage,
                    hideLocalUploadTab: true,
                  }),
                ]
            },
            {
              groupName: "AI Products",
                isCollapsed: true,
                groupFields: [
                  PropertyPaneTextField("aiproducttitle", {
                    label: "AI Product Title",
                  }),
                  PropertyPaneTextField("aiproductdescription", {
                    label: "AI Product Description",
                    multiline: true,
                    rows: 3 // Number of visible rows
                  }),
                ]
            },
            {
              groupName: "AI Insights",
                isCollapsed: true,
                groupFields: [
                  PropertyPaneTextField("aiinsighttitle", {
                    label: "AI Insight Title",
                  }),
                  PropertyPaneTextField("aiinsightdescription", {
                    label: "AI Insight Description",
                    multiline: true,
                    rows: 3 // Number of visible rows
                  }),
                ]
            },
            {
              groupName: "AI Stack",
                isCollapsed: true,
                groupFields: [
                  PropertyPaneTextField("aistacktitle", {
                    label: "AI Stack Title",
                  }),
                  PropertyPaneTextField("aistackdesription", {
                    label: "AI Stack Description",
                    multiline: true,
                    rows: 3 // Number of visible rows
                  }),
                ]
            },
            // {
            //   groupName: "Our Team",
            //     isCollapsed: true,
            //     groupFields: [
            //       PropertyPaneTextField("ourteamtitle", {
            //         label: "Our Team Title",
            //       }),
            //       PropertyPaneTextField("ourteamdesription", {
            //         label: "Our Team Description",
            //         multiline: true,
            //         rows: 3
            //       }),
            //     ]
            // },
          ]
        }
      ]
    };
  }
}
