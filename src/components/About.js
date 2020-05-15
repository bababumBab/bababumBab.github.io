import React from 'react'
import { Link } from 'react-router-dom'

import Mask_Group_1_e_pattern from '../styles/assets/Mask_Group_1_e_pattern.png'
import GA_icon_5_way_2x from '../styles/assets/GA_icon_5_way_2x.png'
import Headshot_bw_pattern from '../styles/assets/Headshot_bw_pattern.png'

const About = () => {
  return (
    <>
      <div className="about">


        <div id="GA_About_Sticky_Head" className="GA_About_Sticky_Head_Class">
          <div className="About_Content_Class">
            <div className="I_am_an_ACTIVATOR___When_can_w_Class">
              <span>I am an ACTIVATOR<br /><br />“When can we start?” This is a recurring question in my life. I am impatient for action. I may concede that analysis has its uses or that debate and discussion can occasionally yield some valuable insights, but deep down I know that only action is real. Only action can make things happen. <br /><br />Every person I meet is special. INDIVIDUALISATION theme leads me to be intrigued by the unique qualities of each person. I am impatient with generalisations or “types” because I don’t want to obscure what is special and distinct about each person. Instead, I focus on the differences between individuals. <br /><br />COMMUNICATION trait pushes me to explain, to describe, to host, to speak in public, and to write. <br /><br />Ideas are a dry beginning. Events are static. I feel a need to bring them to life, to energise them, to make them exciting and vivid. And so I turn events into stories and practice telling them. I take the dry idea and enliven it with images and examples and metaphors.  <br />I want my information—whether an idea, an event, a product’s features and benefits, a discovery or a lesson— to survive. <br /><br />SIGNIFICANCE leads me to grow meaningful in the eyes of other people. In the truest sense of the word I want to be recognised. I want to be heard. I want to stand out. I want to be known. <br /><br />In particular, I want to be known and appreciated for the unique strengths I bring. I feel a need to be admired as credible, professional, and successful. Likewise, I want to associate with others who are credible, professional, and successful. </span>
            </div>
            <div className="About_Title_Class">
              <div className="About_Class">
                <span>About</span>
              </div>
              <div className="Hint_logo_Class">
                <svg className="Line_5" viewBox="0 0 22 9">
                  <path fill="transparent" stroke="rgba(236,54,141,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_5_Class" d="M 22 0 L 0 9">
                  </path>
                </svg>
                <svg className="Line_2" viewBox="0 0 24 2">
                  <path fill="transparent" stroke="rgba(39,149,178,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_2_Class" d="M 24 0 L 0 0">
                  </path>
                </svg>
                <svg className="Line_4" viewBox="0 0 22 9">
                  <path fill="transparent" stroke="rgba(83,216,251,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_4_Class" d="M 0 0 L 22 9">
                  </path>
                </svg>
              </div>
            </div>
            <div className="Headshot_Class">
              <img src={Headshot_bw_pattern} x={0} y={0} width="100%" height="100%" href="Headshot_e_pattern.png" xlinkHref="Headshot_e_pattern.png" className="Headshot_Class" />
            </div>
          </div>
          <div className="Header_Class">

            <div className="Mask_Group_1_Class">
              <img src={Mask_Group_1_e_pattern} alt="navbar" id="Mask_Group_1" className="Mask_Group_1_Class" />
            </div>
            <Link to="/">
              <img src={GA_icon_5_way_2x} className="GA_icon_5_way_2x_b_Class" />
            </Link>
            <div className="Nav_bar_Class">
              <svg className="Rectangle_3">
                <rect fill="rgba(39,149,178,1)" className="Rectangle_3_Class" rx={1} ry={1} x={0} y={0} width={30} height={2}>
                </rect>
              </svg>
              <Link to='/about'>
                <div className="ABOUT_Class">
                  <span>ABOUT</span>
                </div>
              </Link>
              <Link to='/projects'>
                <div className="PROJECTS_Class">
                  <span>PROJECTS</span>
                </div>
              </Link>
              <Link to='/experience'>
                <div className="PROFFESIONAL_EXPERIENCE_Class">
                  <span>PROFFESIONAL EXPERIENCE</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="Component_12___1 Component_12___1_Class">
            <svg className="Rectangle_13">
              <rect fill="rgba(255,255,255,1)" className="Rectangle_13_Class" rx={0} ry={0} x={0} y={0} width={1164} height={296}>
              </rect>
            </svg>
            <div className="Component_6___1 Component_6___1_Class">
              <div className="Skills_Content Skills_Content_Class">
                <div className="Skills_Title_Class">
                  <div className="Area_of_Expertise_Class">
                    <span>Area of Expertise</span>
                  </div>
                  <div className="Hint_logo_bd_Class">
                    <svg className="Line_5_be" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(236,54,141,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_5_be_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                    <svg className="Line_2_bf" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(39,149,178,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_2_bf_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                    <svg className="Line_4_bg" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(83,216,251,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_4_bg_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                  </div>
                </div>
                <div className="Group_2_Class">
                  <div className="Component_1___1 Component_1___1_Class">
                    <div className="Project_Management__Software_D_Class">
                      <span>Project Management <br />Software Delivery &amp; Implementation<br />PRINCE2 <br />Business Development<br />Roll-out Business Process  <br />Client Onboarding &amp; Retention Agile Scrum Methodology<br />Agile Kanban Methodology</span><br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="Skills_Content_bk_Class">
                <div className="Group_1_Class">
                  <div className="Software_Development_Object_Or_Class">
                    <span>Software Development<br />Object-Oriented Programming<br />Test-Driven Development<br />Responsive Design <br />Authentication<br />Wireframing<br />Email Marketing<br />Omni-Channel Marketing Campaigns <br /></span><br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Component_11___1 Component_11___1_Class">
            <svg className="Rectangle_12">
              <rect fill="rgba(255,255,255,1)" className="Rectangle_12_Class" rx={0} ry={0} x={0} y={0} width={1164} height={365}>
              </rect>
            </svg>
            <div className="Component_7___1 Component_7___1_Class">
              <div className="Skills_Content Skills_Content_bq_Class">
                <div className="______Google_Technical_Writing_Class">
                  <span>      Google Technical Writing Course<br />London, UK<br />April 2020<br /><br />General Assembly Software Engineering Immersive Course London, UK<br />February 2020 – April 2020<br /><br />PRINCE2 Practitioner and Foundation Certificates in Project Management London, UK – August 2018<br /></span><br />
                </div>
                <div className="__Masters_in_Commercial_Risk_M_Class">
                  <span><br /><br />Masters in Commercial Risk Management<br />Academy of Economic Studies <br />Bucharest, Romania <br />October 2011 – June 2013<br />Dissertation completion event at Sorbonne Paris and ICN Business School Nancy-Metz<br /><br />Bachelor’s Degree in International Economic Relations and Affairs <br />Academy of Economic Studies Bucharest, Romania <br />October 2008 – June 2011<br /></span><br />
                </div>
              </div>
              <div className="Skills_Content Skills_Content_bt_Class">
                <div className="Skills_Title_bu_Class">
                  <div className="Education___Credentials_Class">
                    <span>Education &amp; Credentials</span>
                  </div>
                  <div className="Hint_logo_bw_Class">
                    <svg className="Line_5_bx" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(236,54,141,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_5_bx_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                    <svg className="Line_2_by" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(39,149,178,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_2_by_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                    <svg className="Line_4_bz" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(83,216,251,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_4_bz_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Component_13___1 Component_13___1_Class">
            <svg className="Rectangle_14">
              <rect fill="rgba(255,255,255,1)" className="Rectangle_14_Class" rx={0} ry={0} x={0} y={0} width={1164} height={471}>
              </rect>
            </svg>
            <div className="Component_10___1 Component_10___1_Class">
              <div className="Skill Skill_Class">
                <div className="Skill_b_Class">
                  <div className="Skill_ca_Class">

                    <svg className="Rectangle_5">
                      <rect fill="rgba(110,131,135,1)" className="Rectangle_5_Class" rx={0} ry={0} x={0} y={0} width={48} height={48}>
                      </rect>
                    </svg>
                    <div className="Language_Class">
                      <span>Language</span>
                    </div>
                  </div>
                  <div className="Skill_cb_Class">
                    <svg className="Rectangle_5_b">
                      <rect fill="rgba(110,131,135,1)" className="Rectangle_5_b_Class" rx={0} ry={0} x={0} y={0} width={48} height={48}>
                      </rect>
                    </svg>
                    <div className="Language_ca_Class">
                      <span>Language</span>
                    </div>
                  </div>
                  <div className="Skill_cc_Class">
                    <svg className="Rectangle_5_cc">
                      <rect fill="rgba(110,131,135,1)" className="Rectangle_5_cc_Class" rx={0} ry={0} x={0} y={0} width={48} height={48}>
                      </rect>
                    </svg>
                    <div className="Language_cd_Class">
                      <span>Language</span>
                    </div>
                  </div>
                  <div className="Skill_ce_Class">
                    <svg className="Rectangle_5_cf">
                      <rect fill="rgba(110,131,135,1)" className="Rectangle_5_cf_Class" rx={0} ry={0} x={0} y={0} width={48} height={48}>
                      </rect>
                    </svg>
                    <div className="Language_cg_Class">
                      <span>Language</span>
                    </div>
                  </div>
                  <div className="Skill_ch_Class">
                    <svg className="Rectangle_5_ci">
                      <rect fill="rgba(110,131,135,1)" className="Rectangle_5_ci_Class" rx={0} ry={0} x={0} y={0} width={48} height={48}>
                      </rect>
                    </svg>
                    <div className="Language_cj_Class">
                      <span>Language</span>
                    </div>
                  </div>
                  <div className="Skill_ck_Class">
                    <svg className="Rectangle_5_cl">
                      <rect fill="rgba(110,131,135,1)" className="Rectangle_5_cl_Class" rx={0} ry={0} x={0} y={0} width={48} height={48}>
                      </rect>
                    </svg>
                    <div className="Language_cm_Class">
                      <span>Language</span>
                    </div>
                  </div>
                  <div className="Skill_cn_Class">
                    <svg className="Rectangle_5_co">
                      <rect fill="rgba(110,131,135,1)" className="Rectangle_5_co_Class" rx={0} ry={0} x={0} y={0} width={48} height={48}>
                      </rect>
                    </svg>
                    <div className="Language_cp_Class">
                      <span>Language</span>
                    </div>
                  </div>
                  <div className="Skill_cq_Class">
                    <svg className="Rectangle_5_cr">
                      <rect fill="rgba(110,131,135,1)" className="Rectangle_5_cr_Class" rx={0} ry={0} x={0} y={0} width={48} height={48}>
                      </rect>
                    </svg>
                    <div className="Language_cs_Class">
                      <span>Language</span>
                    </div>
                  </div>
                  <div className="Skill_ct_Class">
                    <svg className="Rectangle_5_cu">
                      <rect fill="rgba(110,131,135,1)" className="Rectangle_5_cu_Class" rx={0} ry={0} x={0} y={0} width={48} height={48}>
                      </rect>
                    </svg>
                    <div className="Language_cv_Class">
                      <span>Language</span>
                    </div>
                  </div>
                  <div className="Skill_cw_Class">
                    <svg className="Rectangle_5_cx">
                      <rect fill="rgba(110,131,135,1)" className="Rectangle_5_cx_Class" rx={0} ry={0} x={0} y={0} width={48} height={48}>
                      </rect>
                    </svg>
                    <div className="Language_cy_Class">
                      <span>Language</span>
                    </div>
                  </div>
                  <div className="Skill_cz_Class">
                    <svg className="Rectangle_5_c">
                      <rect fill="rgba(110,131,135,1)" className="Rectangle_5_c_Class" rx={0} ry={0} x={0} y={0} width={48} height={48}>
                      </rect>
                    </svg>
                    <div className="Language_c_Class">
                      <span>Language</span>
                    </div>
                  </div>
                  <div className="Skill_c_Class">
                    <svg className="Rectangle_5_da">
                      <rect fill="rgba(110,131,135,1)" className="Rectangle_5_da_Class" rx={0} ry={0} x={0} y={0} width={48} height={48}>
                      </rect>
                    </svg>
                    <div className="Language_da_Class">
                      <span>Language</span>
                    </div>
                  </div>
                  <div className="Skill_da_Class">
                    <svg className="Rectangle_5_db">
                      <rect fill="rgba(110,131,135,1)" className="Rectangle_5_db_Class" rx={0} ry={0} x={0} y={0} width={48} height={48}>
                      </rect>
                    </svg>
                    <div className="Language_db_Class">
                      <span>Language</span>
                    </div>
                  </div>
                  <div className="Skill_db_Class">
                    <svg className="Rectangle_5_dc">
                      <rect fill="rgba(110,131,135,1)" className="Rectangle_5_dc_Class" rx={0} ry={0} x={0} y={0} width={48} height={48}>
                      </rect>
                    </svg>
                    <div className="Language_dc_Class">
                      <span>Language</span>
                    </div>
                  </div>
                  <div className="Skill_dc_Class">
                    <svg className="Rectangle_5_dd">
                      <rect fill="rgba(110,131,135,1)" className="Rectangle_5_dd_Class" rx={0} ry={0} x={0} y={0} width={48} height={48}>
                      </rect>
                    </svg>
                    <div className="Language_dd_Class">
                      <span>Language</span>
                    </div>
                  </div>
                  <div className="Skill_de_Class">
                    <svg className="Rectangle_5_df">
                      <rect fill="rgba(110,131,135,1)" className="Rectangle_5_df_Class" rx={0} ry={0} x={0} y={0} width={48} height={48}>
                      </rect>
                    </svg>
                    <div className="Language_dg_Class">
                      <span>Language</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Skills___Tools_Class">
                <span>Skills &amp; Tools</span>
              </div>
              <div className="Hint_logo_di_Class">
                <svg className="Line_5_dj" viewBox="0 0 23 9">
                  <path fill="transparent" stroke="rgba(236,54,141,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_5_dj_Class" d="M 23 0 L 0 9">
                  </path>
                </svg>
                <svg className="Line_2_dk" viewBox="0 0 24 2">
                  <path fill="transparent" stroke="rgba(39,149,178,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_2_dk_Class" d="M 24 0 L 0 0">
                  </path>
                </svg>
                <svg className="Line_4_dl" viewBox="0 0 22 9">
                  <path fill="transparent" stroke="rgba(83,216,251,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_4_dl_Class" d="M 0 0 L 22 9">
                  </path>
                </svg>
              </div>
              <div className="Component_8___1 Component_8___1_Class">
                <div className="G_Suite_Microsoft_365_Visual_S_Class">
                  <span>G-Suite<br />Microsoft 365<br />Visual Studio Code<br />Insomnia<br />Table Plus<br />Lucid Chart<br />Monday.com<br />Trello<br />Basecamp<br />Slack<br />Teams<br />Adobe XD<br /></span><br />
                </div>
              </div>
            </div>
          </div>
          <div className="Component_14___2 Component_14___2_Class">
            <svg className="Rectangle_18">
              <rect fill="rgba(255,255,255,1)" className="Rectangle_18_Class" rx={0} ry={0} x={0} y={0} width={182} height={48}>
              </rect>
            </svg>
            <svg className="Rectangle_17">
              <rect fill="rgba(255,255,255,1)" className="Rectangle_17_Class" rx={0} ry={0} x={0} y={0} width={161} height={48}>
              </rect>
            </svg>
            <svg className="Rectangle_16">
              <rect fill="rgba(255,255,255,1)" className="Rectangle_16_Class" rx={0} ry={0} x={0} y={0} width={185} height={48}>
              </rect>
            </svg>
            <svg className="Rectangle_15">
              <rect fill="rgba(255,255,255,1)" className="Rectangle_15_Class" rx={0} ry={0} x={0} y={0} width={214} height={48}>
              </rect>
            </svg>
            <div className="Component_4___1 Component_4___1_Class">
              <div className="Skills_Content_du_Class">
                <div className="Skills_Title_dv_Class">

                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gabrielantonica/">
                    <div className="LinkedIn_d_Class">
                      <span>LinkedIn</span>
                    </div>
                  </a>

                  <div className="Hint_logo_dx_Class">
                    <svg className="Line_5_dy" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(236,54,141,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_5_dy_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                    <svg className="Line_2_dz" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(39,149,178,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_2_dz_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                    <svg className="Line_4_d" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(83,216,251,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_4_d_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                  </div>
                </div>
                <div className="Skills_Content_d_Class">
                  <div className="Skills_Title_d_Class">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/bababumBab">
                      <div className="Github_d_Class">
                        <span>Github</span>
                      </div>
                    </a>
                    <div className="Hint_logo_ea_Class">
                      <svg className="Line_5_eb" viewBox="0 0 2 24">
                        <path fill="transparent" stroke="rgba(236,54,141,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_5_eb_Class" d="M 0 0 L 0 24">
                        </path>
                      </svg>
                      <svg className="Line_2_ec" viewBox="0 0 2 24">
                        <path fill="transparent" stroke="rgba(39,149,178,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_2_ec_Class" d="M 0 0 L 0 24">
                        </path>
                      </svg>
                      <svg className="Line_4_ed" viewBox="0 0 2 24">
                        <path fill="transparent" stroke="rgba(83,216,251,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_4_ed_Class" d="M 0 0 L 0 24">
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="Skills_Content_ee_Class">
                  <div className="Skills_Title_ef_Class">
                    <div className="Hint_logo_el_Class">
                      <svg className="Line_5_em" viewBox="0 0 2 24">
                        <path fill="transparent" stroke="rgba(236,54,141,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_5_em_Class" d="M 0 0 L 0 24">
                        </path>
                      </svg>
                      <svg className="Line_2_en" viewBox="0 0 2 24">
                        <path fill="transparent" stroke="rgba(39,149,178,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_2_en_Class" d="M 0 0 L 0 24">
                        </path>
                      </svg>
                      <svg className="Line_4_eo" viewBox="0 0 2 24">
                        <path fill="transparent" stroke="rgba(83,216,251,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_4_eo_Class" d="M 0 0 L 0 24">
                        </path>
                      </svg>
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:gabriel@antonica.dev">
                      <div className="Email_Class">
                        <span>Email</span>
                      </div>
                    </a>
                    <div className="Hint_logo_el_Class">
                      <svg className="Line_5_em" viewBox="0 0 2 24">
                        <path fill="transparent" stroke="rgba(236,54,141,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_5_em_Class" d="M 0 0 L 0 24">
                        </path>
                      </svg>
                      <svg className="Line_2_en" viewBox="0 0 2 24">
                        <path fill="transparent" stroke="rgba(39,149,178,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_2_en_Class" d="M 0 0 L 0 24">
                        </path>
                      </svg>
                      <svg className="Line_4_eo" viewBox="0 0 2 24">
                        <path fill="transparent" stroke="rgba(83,216,251,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_4_eo_Class" d="M 0 0 L 0 24">
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="Skills_Content_ep_Class">
                  <div className="Skills_Title_eq_Class">
                    <div className="Hint_logo_ew_Class">
                      <svg className="Line_5_ex" viewBox="0 0 2 24">
                        <path fill="transparent" stroke="rgba(236,54,141,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_5_ex_Class" d="M 0 0 L 0 24">
                        </path>
                      </svg>
                      <svg className="Line_2_ey" viewBox="0 0 2 24">
                        <path fill="transparent" stroke="rgba(39,149,178,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_2_ey_Class" d="M 0 0 L 0 24">
                        </path>
                      </svg>
                      <svg className="Line_4_ez" viewBox="0 0 2 24">
                        <path fill="transparent" stroke="rgba(83,216,251,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_4_ez_Class" d="M 0 0 L 0 24">
                        </path>
                      </svg>
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/GabiAntonica">
                      <div className="Twitter_Class">
                        <span>Twitter</span>
                      </div>
                    </a>
                    <div className="Hint_logo_ew_Class">
                      <svg className="Line_5_ex" viewBox="0 0 2 24">
                        <path fill="transparent" stroke="rgba(236,54,141,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_5_ex_Class" d="M 0 0 L 0 24">
                        </path>
                      </svg>
                      <svg className="Line_2_ey" viewBox="0 0 2 24">
                        <path fill="transparent" stroke="rgba(39,149,178,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_2_ey_Class" d="M 0 0 L 0 24">
                        </path>
                      </svg>
                      <svg className="Line_4_ez" viewBox="0 0 2 24">
                        <path fill="transparent" stroke="rgba(83,216,251,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_4_ez_Class" d="M 0 0 L 0 24">
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About

{/*  */ }
{/*  */ }

{/*  */ }

















{/* <img id='cover-image' src='https://media0.giphy.com/media/U4FkC2VqpeNRHjTDQ5/giphy.gif?cid=ecf05e4772191dda4a13943c68d9c19473145da69abaf3f5&rid=giphy.gif' /> */ }
{/* <p> {test} </p> */ }
{/* // <div className="section">
//   <div className="container columns">
//     <div className="column is-5-desktop">

//       <section id="about">
//         <div className="container">
//           <div className="title">About</div>
//         </div>
//         <div className="text is-size-6">
//           Dedicated professional with extensive experience in planning
//           and delivering software projects, digital marketing campaigns
//           and with an always-on desire to learn and develop.
//           <br/>
//           Doing more for the team that I am part of means I needed to acquire more
//           hard skills, which brought me to complete the General Assembly
//           full-stack immersive software engineering bootcamp.
//           <br/>
//           Holistic overview and quick understanding of different programming
//           languages, methodologies, processes and technologies helped me
//           in becoming a well-rounded junior software engineer that can
//           bring people together with a project management twist.
//         </div>
//       </section>

//       <div className="column is-1-desktop"></div>



//       <div className="column is-6-desktop">
//         <section id="skills">
//           <div className="container">
//             <div className="title">
//             Skills
//             </div>

//             <div className="columns is-mobile is-multiline">

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-javascript-plain"></i>
//                 <div className="label">Java­Script</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-python-plain"></i>
//                 <div className="label">Python</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-html5-plain"></i>
//                 <div className="label">HTML</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-css3-plain"></i>
//                 <div className="label">CSS3</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-sass-plain"></i>
//                 <div className="label">SASS</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-react-original"></i>
//                 <div className="label">React</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-nodejs-plain"></i>
//                 <div className="label">Node.js</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-express-original"></i>
//                 <div className="label">Express.js</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-webpack-plain"></i>
//                 <div className="label">Webpack</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-django-plain"></i>
//                 <div className="label">Django</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <img src="src/styles/icons/f3d4.svg" className="fab fa-npm"></img>
//                 <div className="label">NPM</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-nodejs-plain"></i>
//                 <div className="label">Yarn</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-nodejs-plain"></i>
//                 <div className="label">MongoDB</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-nodejs-plain"></i>
//                 <div className="label">PostgreSQL</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-nodejs-plain"></i>
//                 <div className="label">Mocha.js</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-nodejs-plain"></i>
//                 <div className="label">Git</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-nodejs-plain"></i>
//                 <div className="label">Github</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-nodejs-plain"></i>
//                 <div className="label">Heroku</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-nodejs-plain"></i>
//                 <div className="label">VScode</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-nodejs-plain"></i>
//                 <div className="label">Insomnia</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-nodejs-plain"></i>
//                 <div className="label">Trello</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-nodejs-plain"></i>
//                 <div className="label">Chrome</div>
//               </div>

//               <div className="column is-3-mobile is-one-fifth-desktop">
//                 <i className="devicon-nodejs-plain"></i>
//                 <div className="label">SSH</div>
//               </div>










//             </div>
//           </div>
//         </section>
//       </div>




//     </div>
//   </div>
// </div> */}
