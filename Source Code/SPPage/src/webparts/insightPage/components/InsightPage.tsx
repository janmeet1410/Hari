import * as React from 'react';
import styles from './InsightPage.module.scss';
import { IInsightPageProps } from './IInsightPageProps';
import { escape } from '@microsoft/sp-lodash-subset';

require('../../banner/assets/style.css')

export default class InsightPage extends React.Component<IInsightPageProps, {}> {
  public render(): React.ReactElement<IInsightPageProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
           <section id='Usecases' className="success-section">
            {/* <div className="badge">📌 Insights</div>
            <h2>Insights from AI - Use cases</h2>
            <p className="subtitle">
              Real-world use cases showcasing how our solutions drive measurable business impact across diverse industries and transform organizations worldwide.
            </p> */}

            <h2>MedTech</h2>

            <div className="case-grid">
              <div className="case-card">
                <div className="case-header blue">
                  <div className="category">Enterprise</div>
                  <h3>🏢 Digital Transformation at Scale</h3>
                </div>
                <div className="case-body">
                  <p>Helped a Fortune 500 company modernize their legacy systems, resulting in 40% operational efficiency improvement and $2M annual savings.</p>
                  <ul>
                    <li>40% Efficiency Boost</li>
                    <li>98% Uptime</li>
                    <li>$2M Saved</li>
                  </ul>
                </div>
                <div className="case-footer">
                  <button className="btn">Read Case Study →</button>
                </div>
              </div>

              <div className="case-card">
                <div className="case-header green">
                  <div className="category">Healthcare</div>
                  <h3>💊 Patient Data Management System</h3>
                </div>
                <div className="case-body">
                  <p>Developed a HIPAA-compliant platform that streamlined patient records management for a network of 50+ clinics.</p>
                  <ul>
                    <li>50+ Clinics</li>
                    <li>HIPAA Compliant</li>
                    <li>60% Faster Processing</li>
                  </ul>
                </div>
                <div className="case-footer">
                  <button className="btn">Read Case Study →</button>
                </div>
              </div>

              <div className="case-card">
                <div className="case-header purple">
                  <div className="category">E-commerce</div>
                  <h3>🛒 AI-Powered Recommendation Engine</h3>
                </div>
                <div className="case-body">
                  <p>Built a machine learning platform that increased conversion rates by 35% and customer engagement by 50%.</p>
                  <ul>
                    <li>35% Higher Conversion</li>
                    <li>50% More Engagement</li>
                    <li>24/7 AI Support</li>
                  </ul>
                </div>
                <div className="case-footer">
                  <button className="btn">Read Case Study →</button>
                </div>
              </div>
            </div>

<br />
              <h2>Category 2</h2>
<br />

            <div className="case-grid">
              <div className="case-card">
                <div className="case-header blue">
                  <div className="category">Enterprise</div>
                  <h3>🏢 Digital Transformation at Scale</h3>
                </div>
                <div className="case-body">
                  <p>Helped a Fortune 500 company modernize their legacy systems, resulting in 40% operational efficiency improvement and $2M annual savings.</p>
                  <ul>
                    <li>40% Efficiency Boost</li>
                    <li>98% Uptime</li>
                    <li>$2M Saved</li>
                  </ul>
                </div>
                <div className="case-footer">
                  <button className="btn">Read Case Study →</button>
                </div>
              </div>

              <div className="case-card">
                <div className="case-header green">
                  <div className="category">Healthcare</div>
                  <h3>💊 Patient Data Management System</h3>
                </div>
                <div className="case-body">
                  <p>Developed a HIPAA-compliant platform that streamlined patient records management for a network of 50+ clinics.</p>
                  <ul>
                    <li>50+ Clinics</li>
                    <li>HIPAA Compliant</li>
                    <li>60% Faster Processing</li>
                  </ul>
                </div>
                <div className="case-footer">
                  <button className="btn">Read Case Study →</button>
                </div>
              </div>

              <div className="case-card">
                <div className="case-header purple">
                  <div className="category">E-commerce</div>
                  <h3>🛒 AI-Powered Recommendation Engine</h3>
                </div>
                <div className="case-body">
                  <p>Built a machine learning platform that increased conversion rates by 35% and customer engagement by 50%.</p>
                  <ul>
                    <li>35% Higher Conversion</li>
                    <li>50% More Engagement</li>
                    <li>24/7 AI Support</li>
                  </ul>
                </div>
                <div className="case-footer">
                  <button className="btn">Read Case Study →</button>
                </div>
              </div>
            </div>

<br />
 <h2>Category 3</h2>
<br />


            <div className="case-grid">
              <div className="case-card">
                <div className="case-header blue">
                  <div className="category">Enterprise</div>
                  <h3>🏢 Digital Transformation at Scale</h3>
                </div>
                <div className="case-body">
                  <p>Helped a Fortune 500 company modernize their legacy systems, resulting in 40% operational efficiency improvement and $2M annual savings.</p>
                  <ul>
                    <li>40% Efficiency Boost</li>
                    <li>98% Uptime</li>
                    <li>$2M Saved</li>
                  </ul>
                </div>
                <div className="case-footer">
                  <button className="btn">Read Case Study →</button>
                </div>
              </div>

              <div className="case-card">
                <div className="case-header green">
                  <div className="category">Healthcare</div>
                  <h3>💊 Patient Data Management System</h3>
                </div>
                <div className="case-body">
                  <p>Developed a HIPAA-compliant platform that streamlined patient records management for a network of 50+ clinics.</p>
                  <ul>
                    <li>50+ Clinics</li>
                    <li>HIPAA Compliant</li>
                    <li>60% Faster Processing</li>
                  </ul>
                </div>
                <div className="case-footer">
                  <button className="btn">Read Case Study →</button>
                </div>
              </div>

              <div className="case-card">
                <div className="case-header purple">
                  <div className="category">E-commerce</div>
                  <h3>🛒 AI-Powered Recommendation Engine</h3>
                </div>
                <div className="case-body">
                  <p>Built a machine learning platform that increased conversion rates by 35% and customer engagement by 50%.</p>
                  <ul>
                    <li>35% Higher Conversion</li>
                    <li>50% More Engagement</li>
                    <li>24/7 AI Support</li>
                  </ul>
                </div>
                <div className="case-footer">
                  <button className="btn">Read Case Study →</button>
                </div>
              </div>
            </div>

          </section>
    );
  }
}
