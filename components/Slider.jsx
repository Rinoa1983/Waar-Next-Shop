import { Carousel } from "react-bootstrap"
import Image from "next/image"

export default function Slider() {
  return (
    <div>
      <Carousel controls={false} fade={true} interval={3000}>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Image className="d-block w-50 max-h-96 rounded-5" src="/pictures/hardware/pc-setup.jpg" alt="Gaming-PC-Setup" width={3000} height={430} />
            </div>
        </Carousel.Item>
<Carousel.Item>
            <div className="d-flex justify-content-center">
              <Image className="d-block w-50 max-h-96 rounded-5" src="/pictures/hardware/ps5-controller.jpg" alt="PS5-Controller" width={3000} height={430} />
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Image className="d-block w-50 max-h-96 rounded-5" src="/pictures/hardware/series-s.jpg" alt="X-Box-Series-S" width={3000} height={430} />
            </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
