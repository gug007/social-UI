import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Route, Link } from "react-router-dom"
import {
  Row, Col, Icon, Input, List, Skeleton, Avatar,
} from 'antd'

const rootStyle = {
  maxWidth: '1000px',
  margin: '0 auto'
}

const mockChatList = [
  {
    id: '1',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    firstName: 'Gurgen',
    lastName: '',
    lastMessage: {
      createdAt: new Date(),
      text: 'Hi there!',
    }
  },
  {
    id: '2',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    firstName: 'Aric',
    lastName: '',
    lastMessage: {
      createdAt: new Date(),
      text: 'I wanna the BCAA',
    }
  },
  {
    id: '3',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    firstName: 'Elon',
    lastName: 'Musk',
    lastMessage: {
      createdAt: new Date(),
      text: 'Where can I get the lsd? my stocks run out',
    }
  },
  {
    id: '4',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    firstName: 'Beauties',
    lastName: '',
    lastMessage: {
      createdAt: new Date(),
      text: 'Ok',
    }
  },
]

class Chat extends React.Component {
  state = {
    chatList: {
      selectedChat: null,
      loading: false,
      list: mockChatList,
      searchValue: '',
    }
  }

  onSelectChat = (selectedChat) => {
    this.setState(prevState => ({
      chatList: {
        ...prevState.chatList,
        selectedChat,
      }
    }))
  }

  onChangeChatListSearchValue = (e) => {
    const searchValue = e.target.value
    this.setState(prevState => ({
      chatList: {
        ...prevState.chatList,
        searchValue,
      },
    }))
  }

  resetChatListSearchValue = () => {
    this.setState(prevState => ({
      chatList: {
        ...prevState.chatList,
        searchValue: '',
      },
    }))
    this.input.focus()
  }

  input = null

  render() {
    console.log('props', this.props)
    const { match } = this.props
    const {
      chatList: {
        selectedChat,
        loading,
        list,
        searchValue,
      },
    } = this.state

    const suffix = searchValue ?
      <Icon
        type="close"
        theme="outlined"
        style={{ color: 'rgba(0,0,0,.25)' }}
        onClick={this.resetChatListSearchValue}
      /> : null

    return (
      <div style={rootStyle}>
        <Row className="chat">
          <Col md={8} className="chat-list">
            <div className="chat-list-header">
              <Icon type="bars" theme="outlined" />
              <span className="chat-list-header-title">Chat</span>
            </div>
            <div className="chat-list-search-box">
              <Input
                placeholder="Search..."
                prefix={<Icon type="user" theme="outlined" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={suffix}
                value={searchValue}
                onChange={this.onChangeChatListSearchValue}
                ref={input => this.input = input}
              />
            </div>
            <div className="list">
              <List
                split={false}
                itemLayout="horizontal"
                loading={loading}
                dataSource={list}
                renderItem={item => (
                  <List.Item
                    className={selectedChat && selectedChat.id === item.id ? 'selected' : ''}
                    onClick={() => this.onSelectChat(item)}
                  >
                    <Skeleton avatar title={false} loading={item.loading} active>
                      <List.Item.Meta
                        avatar={<Avatar size={48} src={item.avatar} />}
                        title={<>{item.firstName} {item.lastName}</>}
                        description={item.lastMessage.text}
                      />
                      <div className="date">{item.lastMessage.createdAt.toLocaleDateString()}</div>
                    </Skeleton>
                  </List.Item>
                )}
              />
            </div>
          </Col>
          <Col md={16} className="chat-messages">
            <div className="chat-messages-header">
              <div className="header-user-info">
                <span className="header-user-info-title">
                  Some user name Some user name Some user name
                </span>
                <span className="header-user-info-status">
                  last seen recently
                </span>
              </div>
              <div className="header-icons">
                <div className="header-icon">
                  <Icon type="search" theme="outlined" />
                </div>
                <div className="header-icon">
                  <Icon type="ellipsis" theme="outlined" />
                </div>
              </div>
            </div>
            <div className="chat-messages-list">
              Messages
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

Chat.propTypes = {}

export default withRouter(Chat)
