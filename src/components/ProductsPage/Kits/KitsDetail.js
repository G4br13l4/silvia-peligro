import React, { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../../Common/Button/Button.tsx';
import { Card } from '../../Common/Card/Card';
import { Header } from '../../Common/Header/Header.tsx';
import { SmartCarousel } from '../../Common/SmartCarousel/SmartCarousel';
import { KITS } from '../../../utils/kits';
import './KitsDetail.scss';

const KitsDetail = props => {
  const { t, i18n } = useTranslation('common');
  const { location, path, match } = props;
  const kits = KITS[match.params.type].items;

  return (
    <section className="kitsDetail-section">
        <Header 
          title={`Kits ${t(`KitsType.${match.params.type}`)}`}
          subtitle="<- Regresar a todos los kits"
        />
        <div className="kitsDetail-section__content">
          <h3>Los kits incluyen:</h3>
          <ul>
            <li>Patrón impreso en tela</li>
            <li>Hilos para bordar ( incluye los colores necesarios para completar el diseño elegido)</li>
            <li>2 agujas</li>
            <li>1 hoja con el mapa de ubicación de colores</li>
            <li>1 hoja con la ubicación de puntadas y consejos sobre la cantidad de hebras a utilizar
            (no incluye el desarrollo de las puntadas).</li>
          </ul>
          {
            kits.map(kit => {
              return (
              <div>
                <img src={kit.cover}/>
                <div>
                  <div>Precio: <span>{kit.price}</span></div>
                </div>
              </div>)
            })
          }
          

          <div>
            <table>
              <thead>
                <tr>
                  <th>Modelo</th>
                  <th>Precio</th> 
                </tr>
              </thead>
              <tbody>
                {kits.map(kit => {
                  return (
                  <tr className="table-row">
                    <td className="title"><span>{kit.name}</span></td>
                    <td className="price">{kit.price} pesos</td>
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
    </section>
  );
}       

export default  KitsDetail;