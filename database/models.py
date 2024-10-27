# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 27, 2024 10:17:54
# Database: sqlite:////tmp/tmp.PaqLN1h1d9/Personal_area_management_system/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Admin(SAFRSBaseX, Base):
    """
    description: Represents administrators who have special privileges to oversee communication and manage users.
    """
    __tablename__ = 'admin'
    _s_collection_name = 'Admin'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False)
    email = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    AdminLogList : Mapped[List["AdminLog"]] = relationship(back_populates="admin")
    UserReportList : Mapped[List["UserReport"]] = relationship(back_populates="reporter")



class Group(SAFRSBaseX, Base):
    """
    description: Represents a group in which multiple users can participate and communicate with each other.
    """
    __tablename__ = 'group'
    _s_collection_name = 'Group'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    created_at = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    GroupMemberList : Mapped[List["GroupMember"]] = relationship(back_populates="group")
    GroupMessageList : Mapped[List["GroupMessage"]] = relationship(back_populates="group")



class User(SAFRSBaseX, Base):
    """
    description: Represents an end user in the system. Users can send and receive messages and have an account status for administrative actions.
    """
    __tablename__ = 'user'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False)
    email = Column(String, nullable=False)
    is_blocked = Column(Boolean)

    # parent relationships (access parent)

    # child relationships (access children)
    GroupMemberList : Mapped[List["GroupMember"]] = relationship(back_populates="user")
    GroupMessageList : Mapped[List["GroupMessage"]] = relationship(back_populates="sender")
    MessageList : Mapped[List["Message"]] = relationship(foreign_keys='[Message.receiver_id]', back_populates="receiver")
    senderMessageList : Mapped[List["Message"]] = relationship(foreign_keys='[Message.sender_id]', back_populates="sender")
    NotificationList : Mapped[List["Notification"]] = relationship(back_populates="user")
    UserActivityList : Mapped[List["UserActivity"]] = relationship(back_populates="user")
    UserFeedbackList : Mapped[List["UserFeedback"]] = relationship(back_populates="user")
    UserReportList : Mapped[List["UserReport"]] = relationship(back_populates="user")
    UserSettingList : Mapped[List["UserSetting"]] = relationship(back_populates="user")



class AdminLog(SAFRSBaseX, Base):
    """
    description: Tracks actions performed by admins for audit and accountability purposes.
    """
    __tablename__ = 'admin_log'
    _s_collection_name = 'AdminLog'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    admin_id = Column(ForeignKey('admin.id'), nullable=False)
    action = Column(Text, nullable=False)
    timestamp = Column(DateTime)

    # parent relationships (access parent)
    admin : Mapped["Admin"] = relationship(back_populates=("AdminLogList"))

    # child relationships (access children)



class GroupMember(SAFRSBaseX, Base):
    """
    description: Joins users with groups they are part of, managing membership information.
    """
    __tablename__ = 'group_member'
    _s_collection_name = 'GroupMember'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    group_id = Column(ForeignKey('group.id'), nullable=False)
    join_date = Column(DateTime)

    # parent relationships (access parent)
    group : Mapped["Group"] = relationship(back_populates=("GroupMemberList"))
    user : Mapped["User"] = relationship(back_populates=("GroupMemberList"))

    # child relationships (access children)



class GroupMessage(SAFRSBaseX, Base):
    """
    description: Stores messages that are sent in groups, linked to the group and the sending user.
    """
    __tablename__ = 'group_message'
    _s_collection_name = 'GroupMessage'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    content = Column(Text, nullable=False)
    timestamp = Column(DateTime)
    sender_id = Column(ForeignKey('user.id'), nullable=False)
    group_id = Column(ForeignKey('group.id'), nullable=False)

    # parent relationships (access parent)
    group : Mapped["Group"] = relationship(back_populates=("GroupMessageList"))
    sender : Mapped["User"] = relationship(back_populates=("GroupMessageList"))

    # child relationships (access children)



class Message(SAFRSBaseX, Base):
    """
    description: Stores information about messages sent by and to users. Each message is linked to a specific user.
    """
    __tablename__ = 'message'
    _s_collection_name = 'Message'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    content = Column(Text, nullable=False)
    timestamp = Column(DateTime)
    sender_id = Column(ForeignKey('user.id'), nullable=False)
    receiver_id = Column(ForeignKey('user.id'), nullable=False)

    # parent relationships (access parent)
    receiver : Mapped["User"] = relationship(foreign_keys='[Message.receiver_id]', back_populates=("MessageList"))
    sender : Mapped["User"] = relationship(foreign_keys='[Message.sender_id]', back_populates=("senderMessageList"))

    # child relationships (access children)



class Notification(SAFRSBaseX, Base):
    """
    description: Represents notifications that alert users about various events and communications.
    """
    __tablename__ = 'notification'
    _s_collection_name = 'Notification'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime)
    is_read = Column(Boolean)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("NotificationList"))

    # child relationships (access children)



class UserActivity(SAFRSBaseX, Base):
    """
    description: Logs user activity for monitoring and behavior analysis purposes.
    """
    __tablename__ = 'user_activity'
    _s_collection_name = 'UserActivity'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    activity_type = Column(String, nullable=False)
    timestamp = Column(DateTime)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("UserActivityList"))

    # child relationships (access children)



class UserFeedback(SAFRSBaseX, Base):
    """
    description: Collects feedback from users regarding their experience and system improvement suggestions.
    """
    __tablename__ = 'user_feedback'
    _s_collection_name = 'UserFeedback'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    feedback_text = Column(Text, nullable=False)
    submitted_at = Column(DateTime)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("UserFeedbackList"))

    # child relationships (access children)



class UserReport(SAFRSBaseX, Base):
    """
    description: Contains reports generated by admins regarding suspicious or problematic user behavior.
    """
    __tablename__ = 'user_report'
    _s_collection_name = 'UserReport'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    report_content = Column(Text, nullable=False)
    created_at = Column(DateTime)
    reporter_id = Column(ForeignKey('admin.id'), nullable=False)
    user_id = Column(ForeignKey('user.id'), nullable=False)

    # parent relationships (access parent)
    reporter : Mapped["Admin"] = relationship(back_populates=("UserReportList"))
    user : Mapped["User"] = relationship(back_populates=("UserReportList"))

    # child relationships (access children)



class UserSetting(SAFRSBaseX, Base):
    """
    description: Stores customizable settings for users such as notifications preferences and privacy settings.
    """
    __tablename__ = 'user_settings'
    _s_collection_name = 'UserSetting'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    email_notifications = Column(Boolean)
    profile_visibility = Column(Boolean)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("UserSettingList"))

    # child relationships (access children)
