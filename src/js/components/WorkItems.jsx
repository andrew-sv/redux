import React from 'react';
import classNames from 'classnames';
import Item from './Item.jsx';

let _fakeItems = new Array(7).fill({id: -1});

const Content = ({type = 'list', items = []}) => (
	<div className={classNames('content', type)}>
		<ul className={classNames('content-list', type)}>
			{items.map((item) => (
				<li key={item.id} className={classNames('content-list-item', type)}>
					<Item type={type} {...item} />
				</li>
			))}
			{
				type == 'card' ?
					_fakeItems.map((_, i) => (
						<li key={i} className={classNames('content-list-item fake', type)}>
							Fake Item
						</li>
					)) : null
			}
		</ul>
	</div>
);

Content.propTypes = {
	type: React.PropTypes.string,
	items: React.PropTypes.array
};

export default Content;