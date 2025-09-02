import * as React from 'react';
import styles from './InsightPage.module.scss';
import { IInsightPageProps } from './IInsightPageProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';

require('../../banner/assets/style.css');
export interface IInsightPageState {
  aiInsights:any;
}
export default class InsightPage extends React.Component<IInsightPageProps, IInsightPageState> {
  constructor(props: IInsightPageProps, state: IInsightPageState) {
        super(props);
        this.state = {
          aiInsights:[],
        };
      }
  public render(): React.ReactElement<IInsightPageProps> {

    return (
      <section id='Usecases' className="success-section">
      {Object.entries(this.groupByCategory(this.state.aiInsights)).map(([category, items]: [string, any[]], catIndex) => (
        <div key={catIndex}>
          <h2>{category}</h2>
          <div className="case-grid">
            {items.map((el, ind) => (
              <div className="case-card" key={ind}>
                <div className={`case-header ${ind % 3 === 0 ? "blue" : ind % 3 === 1 ? "green" : "purple"}`}>
                  <div className="category">{el.Department}</div>
                  <h3>{el.Title}</h3>
                </div>
                <div className="case-body">
                  <p>{el.Description}</p>
                  {/* if KeyFeatures is HTML with <li> elements */}
                  <ul dangerouslySetInnerHTML={{ __html: el.KeyFeatures }}></ul>
                  {/* if it's plain comma-separated text, use this instead:
                  <ul>
                    {el.KeyFeatures.split(",").map((f, i) => <li key={i}>{f.trim()}</li>)}
                  </ul> */}
                </div>
                <div className="case-footer">
                  <a href={el.CaseStudyLink}>
                    <button className="btn">Read Case Study →</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <br />
        </div>
      ))}
    </section>
    
    );
  }

  public componentDidMount = async () => {
    await this.getAIInsights();
  }

  // get ai insights details from AI Insights sharepoint list
    private getAIInsights = async () => {
      await sp.web.lists.getByTitle("AI Insights").items.select("ID,Title,Description,KeyFeatures,Category,Department,CaseStudyLink").top(4999).orderBy("Modified", false).get().then((data) => {
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

    private groupByCategory(items: any[]) {
      return items.reduce((result, item) => {
        if (!result[item.Category]) {
          result[item.Category] = [];
        }
        result[item.Category].push(item);
        return result;
      }, {});
    }
    

}
