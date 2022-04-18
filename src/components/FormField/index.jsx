import React from 'react';
import { Form, Input } from 'antd';
import Icon from '@ant-design/icons';

import {validateField} from '../../utils/helpers';


const FormField = ({name, isPass, placeholder, icon, handleChange, handleBlur, touched, errors, values}) => {

	if (isPass) {
		return (
			<Form.Item
				name={name}
				validateStatus={validateField(name, touched, errors)}
				help={!touched[name] ? '' : errors[name]}
			>
				<Input.Password
					prefix={<Icon component={icon} className="site-form-item-icon" />}
					id={name}
					placeholder={placeholder}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values[name]}
				/>
			</Form.Item>
		)
	} else {
		return (
			<Form.Item
				name={name}
				validateStatus={validateField(name, touched, errors)}
				help={!touched[name] ? '' : errors[name]}
			>
				<Input
					prefix={<Icon component={icon} className="site-form-item-icon" />}
					id={name}
					placeholder={placeholder}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values[name]}
				/>
			</Form.Item>
		);
	}
};

export default FormField;
