import vegetables from './images/vegetables.svg';
import dairy from './images/dairy.svg';
import redMeat from './images/redMeat.svg';
import fish from './images/fish.svg';
import whiteMeat from './images/whiteMeat.svg';
import negation1 from './images/negation1.svg';
import negation2 from './images/negation2.svg';

export const data = {
	dietLength: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
	weeks: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'],
	activeWeekIndex: 6,

	proteins: {
		options: [
			{ id: 'vegetables', svg: vegetables, selected: true },
			{ id: 'dairy', svg: dairy, selected: true },
			{ id: 'redMeat', svg: redMeat, selected: true },
			{ id: 'fish', svg: fish, selected: false },
			{ id: 'whiteMeat', svg: whiteMeat, selected: false },
		],
		negation1: negation1,
		negation2: negation2,
	},

	week7: [
		{
			day: 'DAY 64',
			active: false,
			meals: [
				{
					id: '1',
					name: `Bod•ē Shake`,
					image: '/images/bode_shake.png',
					completed: true,
				},
				{
					id: '2',
					name: `Ham and Swiss Roll Ups`,
					completed: true,
				},
				{
					id: '3',
					name: `Turkey Melt`,
					completed: true,
				},
				{
					id: '4',
					name: `Bod•ē Burn	with Mozzarella and Tomato Slices`,
					completed: true,
				},
				{
					id: '3',
					name: `Turkey Melt`,
					completed: false,
				},
			],
			carbs: 'LOW-CARB',
			workout: true,
		},
		{
			day: 'DAY 65',
			active: true,
			meals: [
				{
					id: '1',
					name: `Bod•ē Shake`,
					image: './images/bode_shake.png',
					completed: false,
				},
				{
					id: '2',
					name: `Ham and Swiss Roll Ups`,
					completed: false,
				},
				{
					id: '3',
					name: `Turkey Melt`,
					completed: false,
				},
				{
					id: '4',
					name: `Bod•ē Burn with Mozzarella and Tomato Slices`,
					completed: false,
				},
				{
					id: '3',
					name: `Turkey Melt`,
					completed: false,
				},
			],
			carbs: 'LOW-CARB',
			workout: true,
		},
		{
			day: 'DAY 66',
			active: false,
			meals: [
				{
					id: '1',
					name: `Bod•ē Shake`,
					image: './images/bode_shake.png',
					completed: false,
				},
				{
					id: '5',
					name: `Grilled Steak   (HC)`,
					image: '',
					completed: false,
				},
				{
					id: '1',
					name: `Bod•ē Shake`,
					image: './images/bode_shake.png',
					completed: false,
				},
				{
					id: '6',
					name: `Bod•ē Burn and Whole-Wheat English Muffin with Butter Spray`,
					completed: false,
				},
				{
					id: '7',
					name: `Garlic Lime Chicken (HC)`,
					completed: false,
				},
			],
			carbs: 'HIGH-CARB',
			workout: false,
		},
		{
			day: 'DAY 67',
			active: false,
			meals: [
				{
					id: '1',
					name: `Bod•ē Shake`,
					image: './images/bode_shake.png',
					completed: false,
				},
				{
					id: '2',
					name: `Ham and Swiss Roll Ups`,
					completed: false,
				},
				{
					id: '3',
					name: `Turkey Melt`,
					completed: false,
				},
				{
					id: '4',
					name: `Bod•ē Burn with Mozzarella and Tomato Slices`,
					completed: false,
				},
				{
					id: '3',
					name: `Turkey Melt`,
					completed: false,
				},
			],
			carbs: 'LOW-CARB',
			workout: false,
		},
		{
			day: 'DAY 68',
			active: false,
			meals: [
				{
					id: '1',
					name: `Bod•ē Shake`,
					image: './images/bode_shake.png',
					completed: false,
				},
				{
					id: '2',
					name: `Ham and Swiss Roll Ups`,
					image: '',
					completed: false,
				},
				{
					id: '1',
					name: `Bod•ē Shake`,
					image: './images/bode_shake.png',
					completed: false,
				},
				{
					id: '4',
					name: `Bod•ē Burn with Mozzarella and Tomato Slices`,
					completed: false,
				},
				{
					id: '3',
					name: `Turkey Melt`,
					completed: false,
				},
			],
			carbs: 'LOW-CARB',
			workout: false,
		},
		{
			day: 'DAY 69',
			active: false,
			meals: [
				{
					id: '1',
					name: `Bod•ē Shake`,
					image: './images/bode_shake.png',
					completed: false,
				},
				{
					id: '5',
					name: `Grilled Steak  (HC)`,
					completed: false,
				},
				{
					id: '1',
					name: `Bod•ē Shake`,
					image: './images/bode_shake.png',
					completed: false,
				},
				{
					id: '6',
					name: `Bod•ē Burn and	Whole-Wheat	English Muffin	with Butter Spray`,
					completed: false,
				},
				{
					id: '7',
					name: `Garlic Lime Chicken (HC)`,
					completed: false,
				},
			],
			carbs: 'HIGH-CARB',
			workout: false,
		},
	],

	guiltFreeDay: {
		day: 'DAY 70',
		active: false,
	},
};
