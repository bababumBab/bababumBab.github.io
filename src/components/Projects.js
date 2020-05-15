import React from 'react'

import { Link } from 'react-router-dom'

import Mask_Group_1_d_pattern from '../styles/assets/Mask_Group_1_d_pattern.png'
import GA_icon_5_way_2x_b from '../styles/assets/GA_icon_5_way_2x_b.png'
import Image_1 from '../styles/assets/Image_1.png'
import Image_1_fo from '../styles/assets/Image_1_fo.png'
import Image_1_fr from '../styles/assets/Image_1_fr.png'
import Image_1_fu from '../styles/assets/Image_1_fu.png'

const Projects = () => {
  return (
    <>
      <div className='projects'>

        <div id="GA_Projects_Sticky_Head" className="GA_Projects_Sticky_Head_Class">
          <div data-type="Group" data-name="Project Content" className="Project_Content_Class">
            <div data-type="Group" data-name="About Title" className="About_Title_Class">
              <div data-type="Text" data-name="Projects" className="Projects_Class">
                <span>Projects</span>
              </div>
              <div data-type="Group" data-name="Hint logo" className="Hint_logo_Class">
                <svg data-type="Line" data-name="Line 5" className="Line_5" viewBox="0 0 2 24">
                  <path fill="transparent" stroke="rgba(236,54,141,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_5_Class" d="M 0 0 L 0 24">
                  </path>
                </svg>
                <svg data-type="Line" data-name="Line 2" className="Line_2" viewBox="0 0 2 24">
                  <path fill="transparent" stroke="rgba(39,149,178,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_2_Class" d="M 0 0 L 0 24">
                  </path>
                </svg>
                <svg data-type="Line" data-name="Line 4" className="Line_4" viewBox="0 0 2 24">
                  <path fill="transparent" stroke="rgba(83,216,251,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_4_Class" d="M 0 0 L 0 24">
                  </path>
                </svg>
              </div>
            </div>
            <div data-type="Repeat Grid" data-name="Project" className="Project_Class">
              <a target="_blank" rel="noopener noreferrer" href="https://fresh-sneakers.herokuapp.com/">
                <div data-type="Group" data-name="Project" className="Project_r_Class">
                  <img className="Image_1_Class" src={Image_1} />
                  <div data-type="Text" className="Completed_as_Project_4_during__Class">
                    <span>Completed as Project 4 during GA Bootcamp</span><br /><span style={{ fontStyle: 'normal', fontWeight: 'normal' }}><br />Django and PostgreSQL backend with a ReactJs frontend app.<br /><br />Individual project built in 7 days. <br /><br />Ability to keep track of your sneaker collection, add new sneakers and edit when was the last time you used a pair to facilitate rotation.<br /><br />Approach:<br />Start with a solid backend that can incorporate all the requirements of a sneaker enthusiast and be easier to scale and create a 2.0 version of the app down the line.</span>
                  </div>
                </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://ehubsports.herokuapp.com/">
                <div data-type="Group" data-name="Project" className="Project_u_Class">
                  <img className="Image_1_v_Class" src={Image_1_fo} />
                  <div data-type="Text" className="Completed_as_Project_3_during__Class">
                    <span>Completed as Project 3 during GA Bootcamp</span><br /><span style={{ fontStyle: 'normal', fontWeight: 'normal' }}><br />JavaScript Express and MongoDB backend with ReactJs frontend app.<br /><br />Group of 3 project built in 8 days. <br /><br />Create a one-stop-shop where you can create your own online events and see other events for gaming and streaming.<br /><br />Approach:<br />Decide on which component every member of the group will do. Start with the backend to give the foundation for a robust frontend.</span><br />
                  </div>
                </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://bababumbab.github.io/project-2/">
                <div data-type="Group" data-name="Project" className="Project_x_Class">
                  <img className="Image_1_y_Class" src={Image_1_fr} />
                  <div data-type="Text" className="Completed_as_Project_2_during__Class">
                    <span>Completed as Project 2 during GA Bootcamp</span><span style={{ fontStyle: 'normal', fontWeight: 'normal' }}><br /><br />JavaScript app with a ReactJs frontend,<br /><br />Pair project built in 2 days. <br /><br />Use available APIs to give the user ability to see latest news and how prices of cryptocurrency evolve with a short story.<br /><br />Approach:<br />Find a theme that can be implemented in a very short period of time. Find suitable API’s that can populate the pages with relevant content.</span>
                  </div>
                </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://bababumbab.github.io/project-1/">
                <div data-type="Group" data-name="Project" className="Project__Class">
                  <img className="Image_1__Class" src={Image_1_fu} />
                  <div data-type="Text" className="Completed_as_Project_1_during__Class">
                    <span>Completed as Project 1 during GA Bootcamp</span><br /><span style={{ fontStyle: 'normal', fontWeight: 'normal' }}><br />Vanilla Javascript project with custom CSS.<br /> <br />An individual project built in 7 days. <br /><br />The challenge was to recreate the rules playbook used by the MIT mathematicians in this deceptively complex grid game.<br /><br />Approach:<br />Create an understand the logic requirements to build a small game of Tic-Tac-Toe and scale afterwards to a big game.<br /></span><br />
                  </div>
                </div>
              </a>
              <div data-type="Group" data-name="Project" className="Project_ba_Class">
                <img data-type="Rectangle" data-name="Image 1" className="Image_1_ba_Class" src="Image_1_ba.png" srcSet="Image_1_ba.png 1x, Image_1_ba@2x.png 2x" />
                <div data-type="Text" className="Short_description_about_the_pr_Class">
                  <span>Short description about the project goes here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /><br />Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </span><br />
                </div>
              </div>
            </div>
          </div>
          <div data-type="Group" data-name="Header" className="Header_Class">
            <div data-type="Group" data-name="Mask Group 1" className="Mask_Group_1_Class">
              <img src={Mask_Group_1_d_pattern} alt="navbar" className="Mask_Group_1_b_Class" />

            </div>
            {/* <img data-type="Rectangle" data-name="GA-icon-5-way@2x" className="GA_icon_5_way_2x_Class" src="GA_icon_5_way_2x.png" srcSet="GA_icon_5_way_2x.png 1x, GA_icon_5_way_2x@2x.png 2x" /> */}
            <Link to='/'>
              <img className="GA_icon_5_way_2x_b_Class" src={GA_icon_5_way_2x_b} />
            </Link>
            <div data-type="Group" data-name="Nav bar" className="Nav_bar_Class">
              <svg data-type="Rectangle" data-name="Rectangle 3" className="Rectangle_3">
                <rect fill="rgba(39,149,178,1)" className="Rectangle_3_Class" rx={1} ry={1} x={0} y={0} width={30} height={2}>
                </rect>
              </svg>
              <Link to='/about'>
                <div data-type="Text" data-name="ABOUT" className="ABOUT_Class">
                  <span>ABOUT</span>
                </div>
              </Link>
              <Link to='/projects'>
                <div data-type="Text" data-name="PROJECTS" className="PROJECTS_Class">
                  <span>PROJECTS</span>
                </div>
              </Link>
              <Link to='/experience'>
                <div data-type="Text" data-name="PROFFESIONAL EXPERIENCE" className="PROFFESIONAL_EXPERIENCE_Class">
                  <span>PROFFESIONAL EXPERIENCE</span>
                </div>
              </Link>
            </div>
          </div>

          <div data-type="Symbol" data-name="Component 14 – 5" className="Component_14___5 Component_14___5_Class">
            <svg data-type="Rectangle" data-name="Rectangle 18" className="Rectangle_18">
              <rect fill="rgba(255,255,255,1)" className="Rectangle_18_Class" rx={0} ry={0} x={0} y={0} width={182} height={48}>
              </rect>
            </svg>
            <svg data-type="Rectangle" data-name="Rectangle 17" className="Rectangle_17">
              <rect fill="rgba(255,255,255,1)" className="Rectangle_17_Class" rx={0} ry={0} x={0} y={0} width={161} height={48}>
              </rect>
            </svg>
            <svg data-type="Rectangle" data-name="Rectangle 16" className="Rectangle_16">
              <rect fill="rgba(255,255,255,1)" className="Rectangle_16_Class" rx={0} ry={0} x={0} y={0} width={185} height={48}>
              </rect>
            </svg>
            <svg data-type="Rectangle" data-name="Rectangle 15" className="Rectangle_15">
              <rect fill="rgba(255,255,255,1)" className="Rectangle_15_Class" rx={0} ry={0} x={0} y={0} width={214} height={48}>
              </rect>
            </svg>

            <div data-type="Symbol" data-name="Component 4 – 1" className="Component_4___1 Component_4___1_Class">
              <div data-type="Group" data-name="Skills Content" className="Skills_Content_Class">
                <div data-type="Group" data-name="Skills Title" className="Skills_Title_Class">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gabrielantonica/">
                    <div data-type="Text" data-name="LinkedIn" className="LinkedIn_bw_Class">
                      <span>LinkedIn</span>
                    </div>
                  </a>
                  <div data-type="Group" data-name="Hint logo" className="Hint_logo_bs_Class">
                    <svg data-type="Line" data-name="Line 5" className="Line_5_bt" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(236,54,141,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_5_bt_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                    <svg data-type="Line" data-name="Line 2" className="Line_2_bu" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(39,149,178,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_2_bu_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                    <svg data-type="Line" data-name="Line 4" className="Line_4_bv" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(83,216,251,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_4_bv_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                  </div>

                </div>
              </div>
              <div data-type="Group" data-name="Skills Content" className="Skills_Content_bx_Class">
                <div data-type="Group" data-name="Skills Title" className="Skills_Title_by_Class">
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/bababumBab">
                    <div data-type="Text" data-name="Github" className="Github_b_Class">
                      <span>Github</span>
                    </div>
                  </a>
                  <div data-type="Group" data-name="Hint logo" className="Hint_logo_ca_Class">
                    <svg data-type="Line" data-name="Line 5" className="Line_5_ca" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(236,54,141,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_5_ca_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                    <svg data-type="Line" data-name="Line 2" className="Line_2_ca" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(39,149,178,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_2_ca_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                    <svg data-type="Line" data-name="Line 4" className="Line_4_ca" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(83,216,251,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_4_ca_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                  </div>

                </div>
              </div>
              <div data-type="Group" data-name="Skills Content" className="Skills_Content_b_Class">
                <div data-type="Group" data-name="Skills Title" className="Skills_Title_ca_Class">
                  <div data-type="Group" data-name="Hint logo" className="Hint_logo_cg_Class">
                    <svg data-type="Line" data-name="Line 5" className="Line_5_ch" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(236,54,141,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_5_ch_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                    <svg data-type="Line" data-name="Line 2" className="Line_2_ci" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(39,149,178,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_2_ci_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                    <svg data-type="Line" data-name="Line 4" className="Line_4_cj" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(83,216,251,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_4_cj_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href="mailto:gabriel@antonica.dev">
                    <div className="Email_Class">
                      <span>Email</span>
                    </div>
                  </a>
                  <div data-type="Group" data-name="Hint logo" className="Hint_logo_cg_Class">
                    <svg data-type="Line" data-name="Line 5" className="Line_5_ch" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(236,54,141,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_5_ch_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                    <svg data-type="Line" data-name="Line 2" className="Line_2_ci" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(39,149,178,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_2_ci_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                    <svg data-type="Line" data-name="Line 4" className="Line_4_cj" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(83,216,251,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_4_cj_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
              <div data-type="Group" data-name="Skills Content" className="Skills_Content_ck_Class">
                <div data-type="Group" data-name="Skills Title" className="Skills_Title_cl_Class">
                  <div data-type="Group" data-name="Hint logo" className="Hint_logo_cr_Class">
                    <svg data-type="Line" data-name="Line 5" className="Line_5_cs" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(236,54,141,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_5_cs_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                    <svg data-type="Line" data-name="Line 2" className="Line_2_ct" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(39,149,178,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_2_ct_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                    <svg data-type="Line" data-name="Line 4" className="Line_4_cu" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(83,216,251,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_4_cu_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/GabiAntonica">
                    <div className="Twitter_Class">
                      <span>Twitter</span>
                    </div>
                  </a>
                  <div data-type="Group" data-name="Hint logo" className="Hint_logo_cr_Class">
                    <svg data-type="Line" data-name="Line 5" className="Line_5_cs" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(236,54,141,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_5_cs_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                    <svg data-type="Line" data-name="Line 2" className="Line_2_ct" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(39,149,178,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_2_ct_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
                    <svg data-type="Line" data-name="Line 4" className="Line_4_cu" viewBox="0 0 2 24">
                      <path fill="transparent" stroke="rgba(83,216,251,1)" strokeWidth="2px" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit={4} shapeRendering="auto" className="Line_4_cu_Class" d="M 0 0 L 0 24">
                      </path>
                    </svg>
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

export default Projects