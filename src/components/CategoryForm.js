import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { CirclePicker } from 'react-color';
import { SideDrawerItem, Input } from '../styles';

export const CategoryForm = () => {
	const [category, setCategory] = useState('');
	const [pickerVisible, setPickerVisible] = useState(false);

	const firestore = useFirestore();
	const { uid } = useSelector((state) => state.firebase.auth);

	const addCategory = async (category) => {
		const docRef = await firestore
			.collection('users')
			.doc(uid)
			.collection('categories')
			.add({
				title: category.title,
				color: category.color,
			});

		docRef.update({
			categoryId: docRef.id,
		});

		setCategory('');
	};

	const handleChange = ({ currentTarget: { name, value } }) => {
		setCategory({ ...category, [name]: value });
	};

	const handleChangeComplete = (color, event) => {
		setCategory({ ...category, color: color.hex });
	};

	return (
		<SideDrawerItem>
			<CirclePicker onChangeComplete={handleChangeComplete} />
			<Input placeholder="New category" name='title'/>
		</SideDrawerItem>
	);
};
