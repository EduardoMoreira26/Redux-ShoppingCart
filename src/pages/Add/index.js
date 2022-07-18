import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { addCar } from '../../store/cars';

export default function Add() {
	const [ form, setForm ] = useState({ name: '', url: '' });
	const dispatch = useDispatch();

	function formChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	function onSubimt(e) {
		e.preventDefault();
		dispatch(addCar(form));
		setForm({ name: '', url: '' });
	}

	return (
		<form className="container mt-5" onSubmit={onSubimt}>
			<div className="form-group">
				<label>Nome</label>
				<input
					value={form.name}
					onChange={formChange} 
					type="text" 
					name="name" 
					className="form-control" 
					placeholder="Nome..." 
				/>
			</div>
			<div className="form-group">
				<label>URL:</label>
				<input 
					value={form.url}
					onChange={formChange} 
					type="text" 
					name="url" 
					className="form-control" 
					placeholder="URL:https://cars" 
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Adicionar
			</button>
		</form>
	);
}
