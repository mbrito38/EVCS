export const GetSiteBannerBrandsQuery = () => {
    return JSON.stringify(
        {
            query: `query SiteBannerBrandQuery {
                Brands(limit: 100) {
                    docs {
                        name
                        id
                    }
                }
                SiteBanner {
                    backgroundColor
                    textColor
                    textContent
                    isActive
                }
            }`
        }
    );
};

export const GetCarModelWithBrandQuery = (brandId: string) => {
    return JSON.stringify(
        {
            query: `query GetCarModelsWithBrandQuery {
                CarModels(limit: 100, where: {brand: {equals: "${brandId}"}}) {
                    docs {
                        id
                        name
                        trim
                        slug
                        year
                        brand {
                            name
                        }
                    }
                }
            }`
        }
    );
};

export const GetDetailCarModelWithSlugQuery = (slug: string) => {
    return JSON.stringify(
        {
            query: `query Brands {
                CarModels (where: {slug: {equals: "${slug}"}}) {
                docs {
                  id
                  name
                  modelImages {
                    id
                    image {
                        url
                        width
                        height
                    }
                  }
                  brand {
                    id
                    name
                  }
                  alias
                  trim
                  year
                  market
                  price {
                    id
                    quantity
                    unit
                  }
                  generalMechanicalInfo {
                    bodyStyle
                    materials {
                      material
                    }
                    exteriorColors {
                      color
                    }
                    interiorColors {
                      color
                    }
                    numberOfDoors
                    numberOfSeats
                    length {
                      quantity
                      unit
                    }
                    width {
                      quantity
                      unit
                    }
                    widthWithMirrors {
                      quantity
                      unit
                    }
                    widthWithFoldedMirrors {
                      quantity
                      unit
                    }
                    height {
                      quantity
                      unit
                    }
                    wheelbase {
                      quantity
                      unit
                    }
                    frontTrack {
                      quantity
                      unit
                    }
                    rearTrack {
                      quantity
                      unit
                    }
                    clearance {
                      quantity
                      unit
                    }
                    frontHeadroom {
                      quantity
                      unit
                    }
                    rearHeadroom {
                      quantity
                      unit
                    }
                    frontShoulderRoom {
                      quantity
                      unit
                    }
                    rearShoulderRoom {
                      quantity
                      unit
                    }
                    frontHipRoom {
                      quantity
                      unit
                    }
                    rearHipRoom {
                      quantity
                      unit
                    }
                    frontLegroom {
                      quantity
                      unit
                    }
                    rearLegroom {
                      quantity
                      unit
                    }
                    passengerVolume {
                      quantity
                      unit
                    }
                    totalVolume {
                      quantity
                      unit
                    }
                    minimumClearance {
                      quantity
                      unit
                    }
                    maximumClearance {
                      quantity
                      unit
                    }
                    secondaryTrunkRoom {
                      quantity
                      unit
                    }
                    curbWeight {
                      quantity
                      unit
                    }
                    payload {
                      quantity
                      unit
                    }
                    trunkVolume {
                      quantity
                      unit
                    }
                    gvwr {
                      quantity
                      unit
                    }
                    dragCoefficient

                  }
                  electricMotor {
                    manufacturer
                    model
                    type
                    location
                    voltage
                    power {
                      quantity
                      unit
                    }
                    maximumPowerRpm {
                      min
                      max
                    }
                    torque {
                      quantity
                      unit
                    }
                    maximumTorqueRpm {
                      min
                      max
                    }
                    regenerativeBraking
                    drivingModes {
                      drivingMode
                    }
                  }
                  performance {
                    topSpeed {
                      id
                      quantity
                      unit
                    }
                    acceleration0100Kmh
                    acceleration80120Kmh
                    acceleration060Mph
                  }
                  drivingRange {
                    standard
                    quantity
                    unit
                  }
                  energyEfficiency {
                    standard
                    driving
                    rating
                  }
                  energyClass
                  steering {
                    mechanism
                    type
                    turningCircle {
                      quantity
                      unit
                    }
                    lockToLockTurns
                  }
                  transmission {
                    type
                    drivetrain
                    axleRatio {
                      value
                    }
                  }
                  suspension {
                    frontSuspension
                    rearSuspension
                  }
                  brakes {
                    frontBrakes
                    rearBrakes
                  }
                  rims {
                    markings
                    width
                    profile
                    diameter
                    contour
                    offset
                    material
                  }
                  tyres {
                    markings
                    width
                    profile
                    loadIndex
                    diameter
                    speedIndex
                  }
                  battery {
                    manufacturer
                    model
                    typeOfRechargeableBattery
                    weight {
                      quantity
                      unit
                    }
                    batteryCapacity {
                      quantity
                      unit
                    }
                    energyDensity {
                      quantity
                      unit
                    }
                    numberOfCells
                    numberOfModules
                    voltage
                    volume {
                      quantity
                      unit
                    }
                    location
                    cooling
                    minimumAmbientTemperature {
                      quantity
                      unit
                    }
                    maximumAmbientTemperature {
                      quantity
                      unit
                    }
                  }
                  chargingType {
                    type
                    interface
                    voltage
                    current
                    power
                  }
                  onboardChargerOrChargingPort {
                    name
                    interface
                    power
                    current
                    location
                  }
                  chargingTime {
                    type
                    batteryPercent
                    estimatedTime
                  }
                }
              }
            }`
        }
    )
};