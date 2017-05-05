import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';
class Inquiry extends Component {
    render() {
        return (
            <ScrollableAnchor id={'INQUIRY'}>
            <div className="inquiry-wrapper">
                <div className="inquiry-content">
                    <p className="first">WHAT’S CUC?</p>

<p className="second">컬쳐랩은 강남 커뮤니티전용아지트에서 영어회화모임을 기반으로 문화예술인문컨텐츠를 함께 향유하는 복합문화커뮤니티입니다.<br/><br/>
우리 모두 커뮤니티에서 각자에게 의미있는 그 무언가를 찾을 수 있다고 믿습니다.</p>
<p className="third">DON’T JUST EXIST !</p>
<p className="contact-header">운영진 및 매니저 연락처</p>
<Table celled className="contact">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Time</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Messenger</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      <Table.Row>
          <Table.Cell>월 저녘</Table.Cell>
          <Table.Cell>매니저 혜련</Table.Cell>
          <Table.Cell>카톡 hyeryubkoo</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>화 저녘</Table.Cell>
          <Table.Cell>매니저 길아</Table.Cell>
          <Table.Cell>카톡 lka6860</Table.Cell>
        </Table.Row>
         <Table.Row>
          <Table.Cell>수 저녘</Table.Cell>
          <Table.Cell>매니저 남휴</Table.Cell>
          <Table.Cell>카톡 hue88</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>목 저녘</Table.Cell>
          <Table.Cell>매니저 민정</Table.Cell>
          <Table.Cell>카톡 alswjd0930</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>금 저녘</Table.Cell>
          <Table.Cell>매니저 지훈</Table.Cell>
          <Table.Cell>카톡 lzh9008</Table.Cell>
        </Table.Row>
         <Table.Row>
          <Table.Cell>토 오전</Table.Cell>
          <Table.Cell>매니저 미정</Table.Cell>
          <Table.Cell>카톡 mijung0101</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>토 오후</Table.Cell>
          <Table.Cell>매니저 은재,진렬</Table.Cell>
          <Table.Cell>카톡 kimeunjae1992, jeanreals</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>일 오전</Table.Cell>
          <Table.Cell>매니저 한얼</Table.Cell>
          <Table.Cell>카톡 hlee281</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>일 오후</Table.Cell>
          <Table.Cell>매니저 서희</Table.Cell>
          <Table.Cell>카톡 seo0532</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>화/목 오전</Table.Cell>
          <Table.Cell>매니저 혜성</Table.Cell>
          <Table.Cell>카톡 cometlee1010</Table.Cell>
        </Table.Row>
        
        
    </Table.Body>
</Table>

                </div>
            </div>
            </ScrollableAnchor>
        );
    }
}

export default Inquiry;