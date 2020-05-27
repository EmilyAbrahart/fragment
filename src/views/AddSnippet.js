import React, { useState } from 'react';
import styled from 'styled-components';
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { Input, TextArea, PrimaryButton } from '../styles';

const AddSnippet = () => {
	const [currentSnippet, setCurrentSnippet] = useState('');
	const firestore = useFirestore();
	const { uid } = useSelector((state) => state.firebase.auth);

	const handleChange = ({ currentTarget: { name, value } }) => {
		setCurrentSnippet({ ...currentSnippet, [name]: value });
  };
  
	const addSnippet = async (snippet) => {
		const docRef = await firestore
			.collection('users')
			.doc(uid)
			.collection('snippets')
			.add({
				title: snippet.title,
				description: snippet.description,
				content: snippet.content,
				created: new Date(),
			});

		docRef.update({
			snippetId: docRef.id,
		});

		setCurrentSnippet('');
		document.getElementById('snippetForm').reset();
		document.getElementById('snippetContent').value = '';
	};
	return (
		<NewSnippetContainer>
			<h1>New Snippet</h1>

			<SnippetForm id="snippetForm">
				<Input
					type="text"
					name="title"
          placeholder='Title'
					value={currentSnippet.title}
					onChange={handleChange}
				/>
				<Input
					type="text"
					name="description"
					placeholder='Description'
					value={currentSnippet.description}
					onChange={handleChange}
				/>
				<TextArea
					id="snippetContent"
					name="content"
					label="Snippet"
					value={currentSnippet.content}
					onChange={handleChange}
				/>
				<PrimaryButton
					onClick={(e) => {
						e.preventDefault();
						addSnippet(currentSnippet);
					}}
				>
					Add Snippet
				</PrimaryButton>
			</SnippetForm>
		</NewSnippetContainer>
	);
};

export default AddSnippet;

const NewSnippetContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow-y: scroll;
	max-height: 700px;
`;

const SnippetForm = styled.form`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;
