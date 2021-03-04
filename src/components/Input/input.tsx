import React, {
  FC,
  ReactElement,
  InputHTMLAttributes,
  ChangeEvent,
} from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/icon'

type InputSize = 'lg' | 'sm'
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /** option to disable input */
  disabled?: boolean
  /** set input size, either lg or sm */
  size?: InputSize
  /** icon  */
  icon?: IconProp
  /** prepend */
  prepend?: string | ReactElement
  /** append */
  append?: string | ReactElement
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void // for Controlled Input
}

/**
 * Input: To get the user input
 * This Input component supports all HTMLInput attributes
 *
 * How to import
 *
 * ~~~js
 * import { Input } from 'joyful-design
 * ~~~
 */
export const Input: FC<InputProps> = (props) => {
  const { disabled, size, icon, prepend, append, style, ...restProps } = props
  const cnames = classNames('joyful-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend,
  })

  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }

  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }

  return (
    <div className={cnames} style={style}>
      {prepend && <div className="joyful-input-group-prepend">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input
        className="joyful-input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="joyful-input-group-append">{append}</div>}
    </div>
  )
}

export default Input
