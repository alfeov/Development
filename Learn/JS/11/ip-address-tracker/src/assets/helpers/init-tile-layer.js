export function initTileLayer(map) {
  L.tileLayer(
    // 'https://tiles.api-maps.yandex.ru/v1/tiles/?x={x}&y={y}&z={z}&lang=ru_RU&l=map&apikey=c5094685-9374-4785-98ba-bf9494e7705c',
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      maxZoom: 19,
    },
  ).addTo(map)
}
