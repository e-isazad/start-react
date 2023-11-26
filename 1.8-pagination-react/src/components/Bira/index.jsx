import React, { useEffect, useState } from 'react';
import { Table, Button, Modal } from 'antd';

const Bira = () => {
    const [bira, setBira] = useState([]);
    const [detailsVisible, setDetailsVisible] = useState(false);
    const [selectedBira, setSelectedBira] = useState(null);

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers')
            .then((response) => response.json())
            .then((data) => setBira(data));
    }, []);

    const showDetails = (bira) => {
        setSelectedBira(bira);
        setDetailsVisible(true);
    };

    const handleCloseDetails = () => {
        setDetailsVisible(false);
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {
            title: 'EBC',
            dataIndex: 'ebc',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.ebc - b.ebc,
        },
        {
            title: 'NAME',
            dataIndex: 'name',
            filters: bira.map((item) => ({
                text: item.name,
                value: item.name,
            })),
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Details',
            dataIndex: '',
            render: (_, record) => (
                <Button type="primary" onClick={() => showDetails(record)}>
                    Details
                </Button>
            ),
        },
    ];

    return (
        <React.Fragment>
            <Table
                style={{ margin: '0 90px' }}
                columns={columns}
                dataSource={bira}
            />
            <Modal
                title="Beer Details"
                visible={detailsVisible}
                onCancel={handleCloseDetails}
                footer={null}
            >
                {selectedBira && (
                    <div >
                        <p>ID: {selectedBira.id}</p>
                        <p>EBC: {selectedBira.ebc}</p>
                        <p>NAME:{selectedBira.name}</p>
                        <img src={selectedBira.image_url} />
                    </div>
                )}
            </Modal>
        </React.Fragment>
    );
};

export default Bira;
