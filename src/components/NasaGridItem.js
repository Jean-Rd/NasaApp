import React from "react";

export const NasaGridItem = ({ image_url, date, camera, rover }) => {
    return (
            <>
                <div className="card m-3 bg-white p-0" id="grid-item">
                    <div className="row no-gutters p-0">
                        <div className="col-sm-5" id="grid-item__img">
                            <img src={ image_url } className="card-img img-fluid" with="100%" height="100%" alt={ camera.name_camera }></img>
                        </div>
                        <div className="col-sm-7">
                            <div className="card-body">
                                <h4 className='card-title'>{ camera.name_camera }</h4>
                                <p className="card-text"><small className="text-muted">{ date }</small></p>
                                <h6 className="card-title">{ rover.name_rover }</h6>
                                <a href={ image_url } target="_blank" rel="noreferrer" className="btn btn-primary">Ver imagen</a>
                            </div>
                        </div>

                    </div>
                </div>
            </>
    )
}