import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string
  /**set disabled Button */
  disabled?: boolean
  /**set Button size */
  size?: ButtonSize
  /** set Button type */
  btnType?: ButtonType
  children: React.ReactNode
  href?: string
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * Button: To trigger an operation (or a series of operations.)
 * How to import
 *
 * ~~~js
 * import { Button } from 'joyful-design'
 * ~~~
 *
 */
export const Button: FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  })

  // Link Button
  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    // regular Button
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
}

export default Button
