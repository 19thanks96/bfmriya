import React from 'react'
import './Typography.scss'

export const Typography = ({variant, Tag, children}) => {
    return <Tag className={variant}>{children}</Tag>
}