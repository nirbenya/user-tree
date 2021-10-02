import * as React from 'react';
import _ from 'lodash';

import UsersTreePage from './users-tree';
import fetchMock from 'fetch-mock';
import { render, waitFor, screen, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';

const usersMock = [
	{
		'email': 'anthony.xiouping@xtreet.tvl',
		'firstName': 'Anthony',
		'id': 5542035486,
		'lastName': 'Xiouping',
		'managerId': 6523331453,
		'password': 'mllv9n0x',
	},
	{
		'email': 'pat.levine@levpat.com',
		'firstName': 'Pat',
		'id': 6188444226,
		'lastName': 'Levine',
		'managerId': 2124250358,
		'password': 'w)R>2o&>',
	},
	{
		'email': 'mariana.safeeq@safeiana.io',
		'firstName': 'Mariana',
		'id': 5628101812,
		'lastName': 'Safeeq',
		'password': '4wU)X,wV',
		'photo': 'https://facefacts.scot/images/science/Q2_high_health_f.jpg',
	},
	{
		'email': 'melita.tong@tmelita.org',
		'firstName': 'Melita',
		'id': 1570231283,
		'lastName': 'Tong',
		'managerId': 4178233656,
		'password': '?M-`2-U-',
	},
	{
		'email': 'joao.tombrello@tomjoao.net',
		'firstName': 'Joao',
		'id': 3101730063,
		'lastName': 'Tombrello',
		'managerId': 6068105088,
		'password': '\\"?r!__N',
	},
	{
		'email': 'alexandra.jostes@jostexandra.tv',
		'firstName': 'Alexandra',
		'id': 7570082632,
		'lastName': 'Jostes',
		'password': 'Nf#WEu:u',
	},
	{
		'email': 'jacklyn.thornburg@thornacklyn.org',
		'firstName': 'Jacklyn',
		'id': 2848813263,
		'lastName': 'Thornburg',
		'managerId': 5161566725,
		'password': 'nZ:ev6YH',
		'photo':
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbOEDJ_AWND7QmEhQqcH1nP0LbRKmOpYRKEHvowd6EKfYUw-rFg',
	},
	{
		'email': 'sreypich.luegers@lpich.tv',
		'firstName': 'Sreypich',
		'id': 6186143643,
		'lastName': 'Luegers',
		'managerId': 2124250358,
		'password': "bY/xb'3&",
		'photo':
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRs7fpgyyy_J-P-I5NPuAE8Zysi6VZ3NQRq2S5Pgu0Js-_pnS2A',
	},
	{
		'email': 'alex.smith@smitalex.net',
		'firstName': 'Alex',
		'id': 5555317184,
		'lastName': 'Smith',
		'password': 'E,zv9G>T',
	},
	{
		'email': 'ricardo.fowler@fowlrdo.com',
		'firstName': 'Ricardo',
		'id': 1126071517,
		'lastName': 'Fowler',
		'password': '8RSNEA2E',
		'photo':
			'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/91/d1b940ec2611e3ae8fafcde7f82495/fconrad_Portrait_060414a.jpg?auto=format%2Ccompress&dpr=1&w=112&h=',
	},
	{
		'email': 'stuart.dholakia@dholakiuart.io',
		'firstName': 'Stuart',
		'id': 1677474533,
		'lastName': 'Dholakia',
		'password': 'aX0fC81U',
	},
	{
		'email': 'tim.pavan@pavtim.net',
		'firstName': 'Tim',
		'id': 5304416561,
		'lastName': 'Pavan',
		'managerId': 5555317184,
		'password': 'lMOSWt+)',
	},
	{
		'email': 'patrick.lane@lpatrick.co.uk',
		'firstName': 'Patrick',
		'id': 6068105088,
		'lastName': 'Lane',
		'password': 'miLoGj%m',
	},
	{
		'email': 'haris.admins@adminharis.co.uk',
		'firstName': 'Haris',
		'id': 8768888772,
		'lastName': 'Admins',
		'password': '{.G6%(eH',
	},
	{
		'email': 'veronica.yoffe@yoffnica.net',
		'firstName': 'Veronica',
		'id': 1100034320,
		'lastName': 'Yoffe',
		'managerId': 4305275052,
		'password': 'UMfm=<!K',
	},
	{
		'email': 'matt.stone@stomatt.com',
		'firstName': 'Matt',
		'id': 5352163188,
		'lastName': 'Stone',
		'managerId': 8768888772,
		'password': '-COiH?dU',
	},
	{
		'email': 'aviv.berlin@berliaviv.tv',
		'firstName': 'Aviv',
		'id': 2673321783,
		'lastName': 'Berlin',
		'managerId': 4305275052,
		'password': "eX'7v;VH",
	},
	{
		'email': 'greg.damavajhala@damavagreg.net',
		'firstName': 'Greg',
		'id': 2718542576,
		'lastName': 'Damavajhala',
		'managerId': 2124250358,
		'password': 'dO"\\u{6.',
		'photo': 'https://beardoholic.com/wp-content/uploads/2016/09/29-Copy.jpg',
	},
	{
		'email': 'hadhemi.frederick@frhemi.io',
		'firstName': 'Hadhemi',
		'id': 6552774181,
		'lastName': 'Frederick',
		'managerId': 7570082632,
		'password': 'r]SoICv*',
		'photo': 'http://andreanjos.org/images/pictures/andre-anjos-600x600.jpg',
	},
	{
		'email': 'michelle.groot@grichelle.tv',
		'firstName': 'Michelle',
		'id': 4305275052,
		'lastName': 'Groot',
		'managerId': 6843380572,
		'password': "^qc0'y{q",
	},
	{
		'email': 'surong.perlmutter@perlmurong.net',
		'firstName': 'Surong',
		'id': 6523331453,
		'lastName': 'Perlmutter',
		'managerId': 8768888772,
		'password': 'OLL>Jl&v',
		'photo': 'https://australian-bodycare.com/uk/wp-content/uploads/2017/02/kvinde-med-bumser-280x300.png',
	},
	{
		'email': 'penny.ello@ellnny.tv',
		'firstName': 'Penny',
		'id': 4474085411,
		'lastName': 'Ello',
		'managerId': 5628101812,
		'password': 'xRpA9yuh',
	},
	{
		'email': 'corry.williams@wicorry.com',
		'firstName': 'Corry',
		'id': 4178233656,
		'lastName': 'Williams',
		'managerId': 6068105088,
		'password': 'H**woFfN',
		'photo':
			'https://www.maybelline.com/~/media/mny/us/face-makeup/concealer/modules/large%20feature/maybelline-iar-concealer-beauty-look-hero-image-1x1.jpg?h=720&w=720&la=en-US&hash=9AE72C61805567813DA6B5FEBCF4AABB269256E9',
	},
	{
		'email': 'ricardo.sathyamurthy@sathycardo.net',
		'firstName': 'Ricardo',
		'id': 2685172206,
		'lastName': 'Sathyamurthy',
		'managerId': 5628101812,
		'password': 'A4*v0oCq',
	},
	{
		'email': 'marissa.gronlund@gronlumarissa.org',
		'firstName': 'Marissa',
		'id': 1815130334,
		'lastName': 'Gronlund',
		'managerId': 6068105088,
		'password': ':9/K_nRl',
		'photo':
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bbsyB-J-cm_vOny0QDjXGs4Wlg7mguqsO3BqOfpD_C1QVNYH',
	},
	{
		'email': 'ricardo.vohra@voricardo.org',
		'firstName': 'Ricardo',
		'id': 5161566725,
		'lastName': 'Vohra',
		'managerId': 5555317184,
		'password': ']A*|7QCP',
	},
	{
		'email': 'sara.baldwin@baldwisara.tv',
		'firstName': 'Sara',
		'id': 6476027073,
		'lastName': 'Baldwin',
		'managerId': 1815130334,
		'password': 'zB)%2T]V',
		'photo': 'https://images.totalbeauty.com/uploads/editorial/lg420x280/best_face_Cleansers_slide.jpg',
	},
	{
		'email': 'maddie.levine@lemaddie.com',
		'firstName': 'Maddie',
		'id': 2124250358,
		'lastName': 'Levine',
		'managerId': 1815130334,
		'password': 'p\\t>VC)D',
	},
	{
		'email': 'andré.gm01@gm0dré.tv',
		'firstName': 'André',
		'id': 6086724510,
		'lastName': 'GM01',
		'managerId': 6617275385,
		'password': ">u=4j'u/",
	},
	{
		'email': 'kevin.jackson@jackkevin.org',
		'firstName': 'Kevin',
		'id': 1334177107,
		'lastName': 'Jackson',
		'managerId': 6523331453,
		'password': 'b,`7[:cp',
	},
	{
		'email': 'priscila.huang@huapriscila.org',
		'firstName': 'Priscila',
		'id': 3710607834,
		'lastName': 'Huang',
		'managerId': 6523331453,
		'password': 'BtJL;AO}',
		'photo': 'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/2018/83-researchersi.jpg',
	},
	{
		'email': 'general.smith@smigeneral.co.uk',
		'firstName': 'General',
		'id': 6843380572,
		'lastName': 'Smith',
		'managerId': 6552774181,
		'password': 'ovYM\\i6:',
		'photo':
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2yPPS-b63XB7pXtiIqt7kcvoyr0uOwEI42qrrKus4HaqyLat6w',
	},
	{
		'email': 'rodrigo.marg@mdrigo.co.uk',
		'firstName': 'Rodrigo',
		'id': 6617275385,
		'lastName': 'Marg',
		'managerId': 6068105088,
		'password': "'=*-\\[F^",
		'photo':
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR992DEDxT-ij7gV0wunsEbketClF6PgTxjdRjQ_4bMoq13cZ-nvA',
	},
];

fetchMock.get('https://gongfetest.firebaseio.com/users.json', usersMock);

describe('<UsersTreePage />', () => {
	it('should correct amount of users', async () => {
		render(
			<Provider store={store}>
				<UsersTreePage />
			</Provider>,
		);

		await waitFor(() => {
			usersMock.forEach(user => {
				expect(document.querySelectorAll('article')).toHaveLength(_.size(usersMock));
			});
		});
	});
	it('should render all names correctly', async () => {
		render(
			<Provider store={store}>
				<UsersTreePage />
			</Provider>,
		);

		await waitFor(() => {
			usersMock.forEach(user => {
				expect(screen.getByText(`${user.firstName} ${user.lastName}`));
			});
		});
	});

	it('should render all managers with + sign', async () => {
		render(
			<Provider store={store}>
				<UsersTreePage />
			</Provider>,
		);

		const managersIds = _.compact(_.uniq(_.map(usersMock, user => user.managerId)));

		await waitFor(() => {
			expect(screen.getAllByText('add')).toHaveLength(_.size(managersIds));
		});
	});

	it('should render first manager with correct employees', async () => {
		render(
			<Provider store={store}>
				<UsersTreePage />
			</Provider>,
		);

		const marianaContainer = screen.getByTestId(5628101812);
		await waitFor(() => {
			expect(within(marianaContainer).getByText('Penny Ello'));
			expect(within(marianaContainer).getByText('Ricardo Sathyamurthy'));
		});
	});
});
