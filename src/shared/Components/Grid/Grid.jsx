import React from 'react';
import _ from 'lodash';
import './grid.css';

const Grid = ({ cols, deliveries, order, dataSource, buttonActions }) => {

  const formatBody = () => {
    let grid = [];
    deliveries.map((d) => {
      let row = [];
      cols.map((c) => {
        row.push(
          renderCell(d, c)
        );
      })
      grid.push(row);
    });
    return grid;
  }

  const renderCell = (r, c) => {
    let content = '';

    if (c.component) {
      const Comp = c.component;
      content = (<Comp delivery={r} actions={buttonActions} config={c.config} />);
    } else if (typeof c.content === 'function') {
      content = c.content(r);
    } else if (Array.isArray(c.content)) {
      content = _.get(r, c.content, 'default');
    }
    
    return {
      content: content,
      width: c.width,
    };
  }

  return(
    <div className='row-fluid' style={{ minHeight: '260px' }}>
      <div className='gridHeader d-flex'>
        {
          cols.map((c) => {
            return (
              <div className={`headerCell col-${c.width}`}>
                <span>
                  {c.title}
                </span>
              </div>
            );
          })
        }
      </div>
      <div className='gridBody'>
        {
          formatBody().map((r) => {
            return(
              <div className='col-12 d-flex'
                style={{ padding: '0px' }}>
                {r.map((c) => {
                  return (
                    <div className={`headerCell d-flex col-${c.width}`}>
                      <div style={{ marginBottom: 'auto', marginTop: 'auto' }}>
                        <span>
                          {c.content}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Grid;