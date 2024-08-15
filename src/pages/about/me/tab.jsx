import React from 'react';
import { Breadcrumb, Button, Card, Carousel, Col, Layout, Row, Tabs } from "antd";
import { HomeOutlined, MailOutlined, PhoneOutlined, QuestionCircleOutlined, UserOutlined, WechatOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const MyTabs = () => (
  <Tabs defaultActiveKey="1" tabPosition="top" style={{ margin: '20px' }}>
    <TabPane tab="1129 PEA Contact Center" key="1">
    <Card style={{ width: "100%"}}>
        <Row>
            <Col span={24}>
            <div style={{ width: '100%', padding: 0, margin: 0 }}>
            <img src="https://www.pea.co.th/Portals/0/Images/New_Contact_Banner1129.png" alt="" style={{ width: '100%', display: 'block' }} />
            </div>
            </Col>
        </Row>
        <Row style={{ marginTop: 40 }}>
            <Col span={8}>
            <div style={{ textAlign: 'center', }}>
            <Button
                type="primary"
                style={{
                color: 'white', 
                margin: 10,
                paddingLeft: 30, 
                paddingRight: 30, 
                paddingTop: 50,
                paddingBottom: 50,
                fontSize: 30,
                borderRadius: 30,
                }}
            >
                <PhoneOutlined style={{ fontSize: '40px' }}/>
            </Button>
            <h1>1129 PEA CONTACT CENTER</h1>
            <span style={{ display: 'block' }}>ตอบคำถามทุกปัญหา</span>
            </div>
            </Col>
            <Col span={8}>
                <div style={{ textAlign: 'center' }}>
                <Button type="primary" style={{ 
                    margin: 10, 
                    paddingLeft: 30, 
                    paddingRight: 30, 
                    paddingTop: 50, 
                    paddingBottom: 50, 
                    fontSize: 30, 
                    borderRadius: 30 
                    }}><WechatOutlined style={{ fontSize: '40px' }}/></Button>
                <h1>LIVE CHAT</h1>
                <span style={{ display: 'block' }}>แชทกับเจ้าหน้าที่ออนไลน์</span>
                </div>
            </Col>
            <Col span={8}>
                <div style={{ textAlign: 'center' }}>
                <Button type="primary" style={{ 
                    margin: 10, 
                    paddingLeft: 30, 
                    paddingRight: 30, 
                    paddingTop: 50, 
                    paddingBottom: 50, 
                    fontSize: 30, 
                    borderRadius: 30 
                    }}><MailOutlined  style={{ fontSize: '40px' }}/></Button>
                <h1>E-MAIL FORM</h1>
                <span style={{ display: 'block' }}>ติดต่อสอบถามผ่านอีเมล์</span>
                </div>
            </Col>
            </Row>
            <Row style={{ marginTop: 20 }}>
            <Col span={8}>
            <div style={{ textAlign: 'center' }}>
                <Button type="primary" style={{ 
                    margin: 10, 
                    paddingLeft: 30, 
                    paddingRight: 30, 
                    paddingTop: 50, 
                    paddingBottom: 50, 
                    fontSize: 30, 
                    borderRadius: 30, 
                    }}><PhoneOutlined  style={{ fontSize: '40px' }}/></Button>
                <h1>PEA MAP</h1>
                <span style={{ display: 'block' }}>ค้นหาแผนที่สำนักงาน กฟภ.</span>
                </div>
            </Col>
            <Col span={8}>
                <div style={{ textAlign: 'center' }}>
                <Button type="primary" style={{ 
                    margin: 10, 
                    paddingLeft: 30, 
                    paddingRight: 30, 
                    paddingTop: 50, 
                    paddingBottom: 50, 
                    fontSize: 30, 
                    borderRadius: 30 
                    }}><QuestionCircleOutlined  style={{ fontSize: '40px' }} /></Button>
                <h1>FAQS</h1>
                <p style={{ display: 'block' }}>คำถามที่พบบ่อย</p>
                </div>
            </Col>
            </Row>
            <Row style={{ marginTop: 40 }}>
            <Col span={15}>
                <h2>การไฟฟ้าส่วนภูมิภาค สำนักงานใหญ่</h2>
                <p>200 ถนนงามวงศ์วาน ลาดยาว จตุจักร กรุงเทพ 10900 <br/> โทร : 1129 PEA Contact Center</p>
            </Col>
            <Col span={9}>
                <h2>การไฟฟ้าส่วนภูมิภาค สำนักงานใหญ่</h2>
                <p>200 ถนนงามวงศ์วาน ลาดยาว จตุจักร กรุงเทพ 10900 <br/> โทร : 1129 PEA Contact Center</p>
            </Col>
            </Row>
        </Card>
    </TabPane>
    <TabPane tab="เมนูระบบโทรศัพท์ (IVR Menu)" key="2">
    <Card style={{ width: "100%"}}>
        <Row style={{ marginTop: 5 }}>
            <Col span={24}>
                <h3>เมนูตอบรับโทรศัพท์อัตโนมัติ (1129 PEA CONTACT CENTER IVR Menu)</h3>
                <div style={{ marginLeft: 20 }}>
                   <b>กด 0</b> ติดต่อเจ้าหน้าที่ / Contact Agents (Thai) <br/>
                   <b>กด 9</b> ติดต่อเจ้าหน้าที่ภาษาอังกฤษ / Contact Agents (English)<br/>
                   <b>กด 1</b> แจ้งเหตุไฟฟ้าขัดข้อง / Outage Notification<br/>
                   <b>กด 2</b> สอบถามยอดค้างชำระ / Electricity Bill amount inquiry<br/>
                   <b>กด 3</b> สอบถามข้อมูลและการสมัครงาน / Information inquiries<br/>
                   <b>กด 4</b> ต้องการเสนอแนะหรือร้องเรียนเกี่ยวกับงานบริการ
                   Recommendation and Complaint<br/>
                   <b>กด 5</b> ขอใช้บริการด้านไฟฟ้า ผู้ใช้รถยนต์ไฟฟ้า และบริการอื่น ๆ 
                   Electricity services, EV Cars and related businesses<br/>
                   <b>กด 6</b> ขอรับหรือส่งเอกสารผ่านโทรสาร / FAX Receiving and Sending
                   <br/>
                </div>
            </Col>
        </Row>
        <Row style={{ marginTop: 15 }}>
            <Col span={24}>
                <h3>อัตราค่าบริการ / Service Rate</h3>
                <div style={{ marginLeft: 20 }}>
                    <ul>
                        <li>เบอร์บ้านโทรทั่วไทย ครั้งละ 3 บาท <br/> (Home-based telephone 3 Baht) </li>
                        <li>เบอร์โทรศัพท์สาธารณะ อัตราครั้งละ 1 บาท <br/> (Public telephone 1 Baht) </li>
                        <li>เบอร์โทรศัพท์มือถือ ราคาตามโปรโมชั่น <br/> (Mobile phone upon service provider)</li>
                    </ul> 
                </div>
            </Col>
        </Row>
    </Card>
    </TabPane>
    <TabPane tab="คำถามที่พบบ่อย" key="3">
        <Card style={{ width: "100%", borderLeft: '5px solid #7400a8'}}>
            <h2 style={{ color: "#7400a8" }}>ถาม : ก่อนที่ลูกค้าจะโทรมาแจ้งเหตุไฟฟ้าดับ ไฟตก ไฟขัดข้อง ควรเตรียมข้อมูลอะไรบ้าง ?</h2> 
        </Card>
        <Card style={{ width: "100%", borderLeft: '5px solid #00a595', marginTop: "10px"}}>
            <h2 style={{ color: "#00a595" }}>ตอบ : เพื่อความสะดวกและรวดเร็วในการรับบริการ คุณลูกค้าต้องเตรียมข้อมูล ดังต่อไปนี้ </h2> 
            <ol>
                <li>หมายเลขผู้ใช้ไฟฟ้า 12 หลัก จากใบแจ้งค่าไฟฟ้า <br/>
                    1.1 ชื่อ - นามสกุล ผู้ที่ขอใช้ไฟฟ้า (เจ้าของมิเตอร์ไฟฟ้า) <br/>
                    1.2 ที่อยู่ของสถานที่เกิดเหตุ เช่น บ้านเลขที่ หมู่ที่ ชื่อหมู่บ้าน ซอย ตำบล อำเภอ จังหวัด <br/>
                    1.3 สถานที่ใกล้เคียงที่เป็นจุดเด่นใกล้สถานที่เกิดเหตุ เช่น วัด สถานที่ราชการ <br/>
                    1.4 สังกัดการไฟฟ้า (การไฟฟ้าที่ดูแลพื้นที่ของคุณลูกค้า)
                </li>
                <li>ชื่อ-นามสกุล ของคุณลูกค้าผู้แจ้งเหตุ</li>
                <li>หมายเลขโทรศัพท์ที่สามารถติดต่อได้</li>
                <li>วันและเวลาที่ไฟฟ้าดับ</li>
                <li>ลักษณะของไฟฟ้าดับ เช่น ดับหลังเดียว ดับบริเวณกว้าง (ดับหลายหลัง)</li>
                <li>สาเหตุเบื้องต้นที่ทำให้ไฟฟ้าดับ</li>
            </ol>
        </Card>
        <Card style={{ width: "100%", borderLeft: '5px solid #7400a8', marginTop: "10px"}}>
            <h2 style={{ color: "#7400a8" }}>ถาม : หมายเลขผู้ใช้ไฟ 12 หลัก มีความสำคัญอย่างไร ?</h2> 
            <img src="https://www.pea.co.th/Portals/0/Images/client/Bill_PEA_2019.jpg" alt="ตัวอย่างใบแจ้งค่าไฟฟ้า" />
        </Card>
        <Card style={{ width: "100%", borderLeft: '5px solid #00a595', marginTop: "10px"}}>
            <h2 style={{ color: "#00a595" }}>ตอบ : </h2> 
            <ul>
                <li>หากคุณลูกค้าสามารถแจ้ง"หมายเลขผู้ใช้ไฟ 12 หลัก" ได้ทันทีในข้อแรกจะช่วยให้การประสานงานรวดเร็วและถูกต้องมากขึ้น และจะช่วยประหยัดเวลาในการสอบถามข้อมูลในข้อ 1.1-1.4 ให้กับคุณลูกค้าได้อีกด้วย</li>
                <li>การแจ้งเหตุไฟดับ, ไฟฟ้าขัดข้อง, ไฟตก ผ่านระบบโทรศัพท์ของ 1129 PEA Call Center จะเชื่อมโยงกับระบบบริหารกระแสไฟฟ้าขัดข้อง(OMS) ของ PEA โดยอัตโนมัติ ช่วยให้สามารถนำข้อมูลแจ้งเหตุไปใช้ประสานงานชุดแก้ไฟของ PEA ได้ทันที ทำให้สามารถแก้ไขไฟฟ้าขัดข้องได้อย่างรวดเร็วดังนั้นเพื่อให้การประสานงานเป็นไปอย่างถูกต้อง รวดเร็วและแม่นยำ คุณลูกค้าควรแจ้งเหตุโดยการระบุ "หมายเลขผู้ใช้ไฟ 12 หลัก" ทุกครั้งแต่ในบางกรณีหากลูกค้าไม่สามารถแจ้ง "หมายเลขผู้ใช้ไฟ 12 หลัก" ได้ เจ้าหน้าที่รับโทรศัพท์จะพยายามค้นหาจากข้อมูลอื่น เช่น สอบถามจากที่อยู่จนกว่าจะได้ "หมายเลขผู้ใช้ไฟ 12 หลัก" ในกรณีนี้ลูกค้าอาจเสียเวลาตอบข้อมูลเพิ่มเติม และสุดท้ายหากไม่สามารถค้นหาข้อมูลใดๆได้ เราก็จะส่งข้อมูลรับแจ้งเหตุไปยังระบบบริหารกระแสไฟฟ้าขัดข้อง (OMS) ของ PEA แต่ข้อมูลอาจจะยังไม่สามารถนำไปประมวลผลได้ทันทีเพราะต้องใช้เจ้าหน้าที่ในการคัดแยกข้อมูลเอง</li>
                <li style={{ color: 'red' }}>อย่าลืม !!! แจ้งเหตุไฟดับ ไฟตก ไฟขัดข้องทุกครั้ง กรุณาเตรียม "หมายเลขผู้ใช้ไฟ 12 หลัก" ไว้ด้วยทุกครั้ง</li>
            </ul>
        </Card>
        <Card style={{ width: "100%", borderLeft: '5px solid #7400a8', marginTop: "10px"}}>
            <h2 style={{ color: "#7400a8" }}>ถาม : การไฟฟ้าส่วนภูมิภาค มีการชี้แจงกรณีจดหน่วยค่าไฟฟ้าคลาดเคลื่อนอย่างไร ?</h2> 
        </Card>
        <Card style={{ width: "100%", borderLeft: '5px solid #00a595', marginTop: "10px"}}>
            <h2 style={{ color: "#00a595" }}>ตอบ : </h2> 
            <img src="https://www.pea.co.th/Portals/0/Images/pea_newsletter_151.jpg" alt="ตัวอย่างใบแจ้งค่าไฟฟ้า" />
        </Card>
    </TabPane>
    <TabPane tab="หมายเลขโทรศัพท์หน่วยงานภายใน" key="4">
        <Card style={{ width: "100%", borderLeft: '5px solid #7400a8'}}>
            <span style={{ color: "#7400a8" }}>สำนักงานใหญ่</span> 
        </Card>
    </TabPane>
    <TabPane tab="หน่วยงานส่วนภูมิภาค" key="5">
    <Card style={{ width: "100%", marginTop: "10px"}}>
        <ul>
            <li><a href="https://www.pea.co.th/pean1" target="_blank"><h3>การไฟฟ้าส่วนภูมิภาค เขต 1 (ภาคเหนือ) จังหวัดเชียงใหม่</h3></a></li>
            <li><a href="https://www.pea.co.th/pean2" target="_blank"><h3>การไฟฟ้าส่วนภูมิภาค เขต 2 (ภาคเหนือ) จังหวัดพิษณุโลก</h3></a></li>
            <li><a href="https://www.pea.co.th/pean3" target="_blank"><h3>การไฟฟ้าส่วนภูมิภาค เขต 3 (ภาคเหนือ) จังหวัดลพบุรี</h3></a></li>
            <li><a href="https://www.pea.co.th/peane1" target="_blank"><h3>การไฟฟ้าส่วนภูมิภาค เขต 1 (ภาคตะวันออกเฉียงเหนือ) จังหวัดอุดรธานี</h3></a></li>
            <li><a href="https://www.pea.co.th/peane2" target="_blank"><h3>การไฟฟ้าส่วนภูมิภาค เขต 2 (ภาคตะวันออกเฉียงเหนือ) จังหวัดอุบลราชธานี</h3></a></li>
            <li><a href="https://www.pea.co.th/peane3" target="_blank"><h3>การไฟฟ้าส่วนภูมิภาค เขต 3 (ภาคตะวันออกเฉียงเหนือ) จังหวัดนครราชสีมา</h3></a></li>
            <li><a href="https://www.pea.co.th/peac1" target="_blank"><h3>การไฟฟ้าส่วนภูมิภาค เขต 1 (ภาคกลาง) จังหวัดพระนครศรีอยุธยา</h3></a></li>
            <li><a href="https://www.pea.co.th/peac2" target="_blank"><h3>การไฟฟ้าส่วนภูมิภาค เขต 2 (ภาคกลาง) จังหวัดชลบุรี</h3></a></li>
            <li><a href="https://www.pea.co.th/peac3" target="_blank"><h3>การไฟฟ้าส่วนภูมิภาค เขต 3 (ภาคกลาง) จังหวัดนครปฐม</h3></a></li>
            <li><a href="https://www.pea.co.th/peas1" target="_blank"><h3>การไฟฟ้าส่วนภูมิภาค เขต 1 (ภาคใต้) จังหวัดเพชรบุรี</h3></a></li>
            <li><a href="https://www.pea.co.th/peas2" target="_blank"><h3>การไฟฟ้าส่วนภูมิภาค เขต 2 (ภาคใต้) จังหวัดนครศรีธรรมราช</h3></a></li>
            <li><a href="https://www.pea.co.th/peas3" target="_blank"><h3>การไฟฟ้าส่วนภูมิภาค เขต 3 (ภาคใต้) จังหวัดยะลา</h3></a></li>
        </ul>
    </Card>
    </TabPane>
  </Tabs>
);

export default MyTabs;

