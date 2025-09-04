import * as React from 'react';
import styles from './Banner.module.scss';
import { IBannerProps } from './IBannerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Icon } from 'office-ui-fabric-react';
import * as moment from 'moment';
import { sp } from '@pnp/sp/presets/all';

require('../assets/style.css');

const backgroundColors = ["#e63946", "#2ecc71", "#9b59b6"];
export interface IBannerState {
  quickLinks:any;
  aiProducts:any;
  aiInsights:any;
  aiTechstacks:any;
}
export default class Banner extends React.Component<IBannerProps, IBannerState> {
  constructor(props: IBannerProps, state: IBannerState) {
    super(props);
    this.state = {
      quickLinks:[],
      aiProducts:[],
      aiInsights:[],
      aiTechstacks:[],
    };
  }
  public render(): React.ReactElement<IBannerProps> {

    const PortfolioImageLink = this.props.portfolioImage == undefined ? require('../assets/image1.png') : this.props.portfolioImage.fileAbsoluteUrl;

    return (
      <div id='Home'>
        <section className="hero">
          <img className='herologo' style={{width:'270px', height:'auto'}} src={require('../assets/jnj.png')} />

          <div className='infoflex'>
            <div style={{display:'none'}} className="tagline">✨ Procurement AI Lab</div>
            <h1>{this.props.welcomebannerTitle}</h1>
            <p>{this.props.welcomebannerDescription1}</p>
            <p>{this.props.welcomebannerDescription2}</p>
          </div>
          <img className='herologo' src={require('../assets/palwhite.png')} />
        </section>

      <div style={{display:'flex'}}>
              <section style={{width:'50%'}} id='mission' className="mission-section">
                <h2>{this.props.ourmissiontitle}</h2>
                <p className="subtitle">{this.props.ourmissiondescription}</p>
                <div className="mission-cards">
                  <div className="mission-card">
                    <i className="fas fa-bullseye"></i>
                    <h3>{this.props.missionlabel1}</h3>
                    <p>{this.props.missiondescription1}</p>
                  </div>
                  <div className="mission-card">
                    <i className="fas fa-heart"></i>
                    <h3>{this.props.missionlabel2}</h3>
                    <p>{this.props.missiondescription2}</p>
                  </div>
                  <div className="mission-card">
                    <i className="fas fa-lightbulb"></i>
                    <h3>{this.props.missionlabel3}</h3>
                    <p>{this.props.missiondescription3}</p>
                  </div>
                </div>
                <div className="circle small"></div>
                <div className="circle large"></div>
              </section>
              <div className='Quicklinks'  style={{paddingTop:'20px', width:'50%',backgroundColor:'#f4f4f4'}}>
                <h2 className="Resourcestitle">Our Resources</h2>
                <p className="Resourcessubtitle">{this.props.QuickAccessDescription}</p>

                <div className='Quicklinkswrapper'>
                  {
                    this.state.quickLinks.length > 0 && this.state.quickLinks.map((ele,ind) => {
                      let imageURL = ele.AttachmentFiles.length > 0 ? ele.AttachmentFiles[0].ServerRelativeUrl : ele.Icon ? JSON.parse(ele.Icon).serverRelativeUrl : require(`../assets/quicklinks/product.png`);
                      return(
                        <a href={ele.Link ? ele.Link.Url : "#"}>
                          <div className='Quicklinkcard'>
                            <img src={imageURL} />
                            <p>{ele.Title}</p>
                          </div>
                        </a>
                      );
                    })
                  }
                </div>
              </div>
      </div>

      <div className='Pagecontainer'> 
      </div>
        <h2 style={{fontSize: "36px", margin: "0 0 15px", fontWeight: "700", marginLeft:'20px', color:'#eb1700'}} >{this.props.ourportfoliotitle}</h2>
      <div style={{display:'flex'}}>
        <div style={{width:'100%', textAlign:'center'}}>
          <img  style={{width:'95%'}} src={PortfolioImageLink} />
        </div>
      </div>
<br />
<div style={{backgroundColor:'#eb1700'}}>
      <div className='Pagecontainer'>
 <section id='products' className="products-section">
          <div className="badge">⚙️ Our Solutions</div>
          <h2 style={{color:'#ffffff'}}>{this.props.aiproducttitle}</h2>
          <p style={{color:'#ffffff'}} className="subtitle">{this.props.aiproductdescription}</p>
          <div className="product-grid">
            {
              this.state.aiProducts.length > 0 && this.state.aiProducts.map((ele,ind) => {
                const bgColor = backgroundColors[ind % backgroundColors.length];
                return(
                  <div className="product-card">
                    <div className="icon">⚡</div>
                    <span className="status popular" style={{background:bgColor}}>{ele.Category}</span>
                    <h3>{ele.Title}</h3>
                    <div className="category">{ele.Department}</div>
                    <p>{ele.Description}</p>
                    <div className="features">
                      <strong>Key Features:</strong>
                      <ul>
                        <p dangerouslySetInnerHTML={{ __html: ele.KeyFeatures}}></p>
                      </ul>
                    </div>
                    <div className="buttons">
                      <a href={ele.LearnMoreButtonLink}><button className="btn btn-primary" style={{backgroundColor:'#eb1700'}}>Learn More →</button></a>
                      <a href={ele.ViewDemoButtonLink}><button className="btn btn-outline">View Demo</button></a>
                    </div>
                  </div>
                );
              })
            }
          </div>
          <a className='abutton' style={{color:'#ffffff',borderColor:'#ffffff'}} href="https://jnj.sharepoint.com/teams/ProcurementDigitalSolutions/SitePages/Products.aspx">View All Products</a>
        </section>
      </div>
      </div>
      <div style={{backgroundColor:'rgb(244, 244, 244)'}}>
 <div className='Pagecontainer'>
        <section id='Usecases' className="success-section">
          <div className="badge">📌 Insights</div>
          <h2>{this.props.aiinsighttitle}</h2>
          <p className="subtitle">{this.props.aiinsightdescription}</p>
          <div className="case-grid">
            {
              this.state.aiInsights.length > 0 && this.state.aiInsights.map((el,ind) => {
                return(
                  <div className="case-card">
                    <div className="case-header blue">
                      <div className="category">{el.Department}</div>
                      <h3>{el.Title}</h3>
                    </div>
                    <div className="case-body">
                      <p>{el.Description}</p>
                      <ul>
                        <p dangerouslySetInnerHTML={{ __html: el.KeyFeatures}}></p>
                      </ul>
                    </div>
                    <div className="case-footer">
                      <a href={el.CaseStudyLink}><button className="btn">Read Case Study →</button></a>
                    </div>
                  </div>
                );
              })
            }
          </div>
          <a className='abutton'  href="https://jnj.sharepoint.com/teams/ProcurementDigitalSolutions/SitePages/Insight%20Usecases.aspx">View All Insight Usecases</a>

        </section>
      </div>
      </div>
     


        <section id='tech' className="tech-section">
          <div className="badge">⚡ Our AI Tech Stack</div>
          <h2>{this.props.aistacktitle}</h2>
          <p className="subtitle">{this.props.aistackdesription}</p>

          <div className="tech-grid">
            {
              this.state.aiTechstacks.length > 0 && this.state.aiTechstacks.map((element,ind) => {
                return(
                  <div className="tech-card">
                    <h3>{element.Title}​</h3>
                    <div className="features">
                      <ul>
                        <p dangerouslySetInnerHTML={{ __html: element.Description}}></p>
                      </ul>
                    </div>
                    <div className="stackimage">
                      <img src={element.Image} alt="" />
                    </div>
                  </div>
                )
              })
            }

            {/* <div className="tech-card">
              <h3>Model Developement & Training / AI Models & Service​</h3>
              <div className="tags">
                <span className="tag">Machine Learning​</span>
                <span className="tag">Hypothesis Testing</span>
                <span className="tag">Optimization & Clustering Algorithms</span>
              </div>
            </div> */}


            </div>
        </section>

        {/* <section id='team' className="about-section">
          <div className="badge"><i className="fas fa-users"></i> Meet Our Team</div>
          <h2>{this.props.ourteamtitle}</h2>
          <p>{this.props.ourteamdesription}</p>
        </section> */}

      </div>
    );
  }

  public componentDidMount = async () => {
    await this.getQuickLinks();
    await this.getAIProducts();
    await this.getAIInsights();
    await this.getAITechStacks();
  }

  // get quick links details from Quick Links sharepoint list
  private getQuickLinks = async () => {
    try {
      const QuickLinkdDetails = await sp.web.lists.getByTitle("Quick Links").items.select("Title,ID,Icon,Link,LinkByOrder").expand('AttachmentFiles').orderBy('LinkByOrder', true).get();

      if (QuickLinkdDetails.length > 0) {
        this.setState({ quickLinks: QuickLinkdDetails });
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  // get ai products details from AI Products sharepoint list
  private getAIProducts = async () => {
    await sp.web.lists.getByTitle("AI Products").items.select("ID,Title,Description,KeyFeatures,Category,Department,LearnMoreButtonLink,ViewDemoButtonLink,ProductOrder").top(4999).orderBy('ProductOrder', true).top(4).get().then((data) => {
      let ProductArr = [];
      if (data.length > 0) {
        data.map((product) => {
          let ProductJson = {};
          ProductJson["ID"] = product.ID;
          ProductJson["Title"] = product.Title ? product.Title : '';
          ProductJson["Description"] = product.Description ? product.Description : '';
          ProductJson["KeyFeatures"] = product.KeyFeatures ? product.KeyFeatures :'';
          ProductJson["Category"] = product.Category ? product.Category : '';
          ProductJson["Department"] = product.Department ? product.Department : '';
          ProductJson["LearnMoreButtonLink"] = product.LearnMoreButtonLink ? product.LearnMoreButtonLink.Url : '#';
          ProductJson["ViewDemoButtonLink"] = product.ViewDemoButtonLink ? product.ViewDemoButtonLink.Url : '#';
          ProductArr.push(ProductJson);
        });
        this.setState({ aiProducts: ProductArr });
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  // get ai insights details from AI Insights sharepoint list
  private getAIInsights = async () => {
    await sp.web.lists.getByTitle("AI Insights").items.select("ID,Title,Description,KeyFeatures,Category,Department,CaseStudyLink").top(4999).orderBy("Modified", false).top(4).get().then((data) => {
      let InsighttArr = [];
      if (data.length > 0) {
        data.map((insight) => {
          let InsightJson = {};
          InsightJson["ID"] = insight.ID;
          InsightJson["Title"] = insight.Title ? insight.Title : '';
          InsightJson["Description"] = insight.Description ? insight.Description : '';
          InsightJson["KeyFeatures"] = insight.KeyFeatures ? insight.KeyFeatures :'';
          InsightJson["Category"] = insight.Category ? insight.Category : '';
          InsightJson["Department"] = insight.Department ? insight.Department : '';
          InsightJson["CaseStudyLink"] = insight.CaseStudyLink ? insight.CaseStudyLink.Url : '#';
          InsighttArr.push(InsightJson);
        });
        this.setState({ aiInsights: InsighttArr });
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  // get ai tech stack details from AI Tech Stack sharepoint list
  private getAITechStacks = async () => {
    await sp.web.lists.getByTitle("AI Tech Stack").items.select("ID,Title,Description,Image").expand('AttachmentFiles').top(4999).top(4).get().then((data) => {
      let TechStackArr = [];
      if (data.length > 0) {
        data.map((insight) => {
          let TechStackJson = {};
          TechStackJson["ID"] = insight.ID;
          TechStackJson["Title"] = insight.Title ? insight.Title : '';
          TechStackJson["Description"] = insight.Description ? insight.Description : '';
          TechStackJson["Image"] = insight.AttachmentFiles.length > 0 ? insight.AttachmentFiles[0].ServerRelativeUrl : insight.Image ? JSON.parse(insight.Image).serverRelativeUrl : require(`../assets/officebg.jpg`);
          TechStackArr.push(TechStackJson);
        });
        this.setState({ aiTechstacks: TechStackArr });
      }
    }).catch((err) => {
      console.log(err);
    });
  }
}
